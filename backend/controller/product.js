const express = require("express");
const { isSeller, isAuthenticated, isAdmin} = require("../middleware/auth");
const router = express.Router();
const Shop = require("../model/shop");
const Order = require("../model/order");
const Product = require("../model/product");
const catchAsyncError = require("../middleware/catchAsyncError");
const ErrorHandler = require("../utils/ErrorHandler");
const { upload } = require("../multer");

const fs = require('fs');
const tf = require('@tensorflow/tfjs-node');
const path = require('path');

let modelPromise; // Promise to hold the loaded model

async function loadModel() {
  if (!modelPromise) {
    const modelPath = path.join(__dirname, 'model.json');
    modelPromise = tf.loadLayersModel('file://' + modelPath);
  }
  return modelPromise;
}

router.post('/predict', async (req, res) => {
  try {
    const imageData = req.body.imageData;

    // Check if the image data is base64-encoded
    if (!imageData.startsWith('data:image')) {
      throw new Error('Invalid image data. Expected base64-encoded image.');
    }

    // Extract image type (e.g., 'image/jpeg') from base64 data
    const imageType = imageData.split(';')[0].split(':')[1];

    // Check if the image type is supported
    if (!['image/jpeg', 'image/png', 'image/gif', 'image/bmp'].includes(imageType)) {
      throw new Error('Unsupported image type. Expected BMP, JPEG, PNG, or GIF.');
    }

    // Remove the data:image/jpeg;base64, prefix before decoding
    const base64Data = imageData.replace(/^data:image\/\w+;base64,/, '');

    // Decode the base64 data and create a TensorFlow tensor
    let tensor = tf.node.decodeImage(Buffer.from(base64Data, 'base64'));

    // Resize the image to match the model input size
    tensor = tf.image.resizeBilinear(tensor, [256, 256]);

    // Add an extra dimension to represent the batch size
    tensor = tf.expandDims(tensor, 0);

    // Load the TensorFlow.js model (this is now a promise)
    const model = await loadModel();

    // Make a prediction
    const prediction = model.predict(tensor);

    // Send the prediction back to the client
    res.json({ prediction: prediction.arraySync() });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ error: error.message });
  }
});

//create product

router.post(
  "/create-product",
  upload.array("images"),
  catchAsyncError(async (req, res, next) => {
    try {
      const shopId = req.body.shopId;
      const shop = await Shop.findById(shopId);
      if (!shop) {
        return next(new ErrorHandler("Shop id is invalid", 400));
      } else {
        const files = req.files;
        const imageUrls = files.map((file) => `${file.filename}`);
        const productData = req.body;
        productData.images = imageUrls;
        productData.shop = shop;

        const product = await Product.create(productData);
        res.status(201).json({
          success: true,
          product,
        });
      }
    } catch (error) {
      return next(new ErrorHandler(error, 400));
    }
  })
);


//update product by id

router.put("/update-product-info/:id",
upload.array("images"),
catchAsyncError(async(req,res,next)=>{
  try {

    const {   
      name,
      description,
      category,
      tags,
      originalPrice,
      discountPrice,
      details,
      stock} = req.body;
     
      
      const productId = req.params.id;
      const product = await Product.findById(productId)
      

    if(!product){
      return next (new ErrorHandler("Product not found with this id",500))
    }
    product.name = name;
    product.description = description;
    product.category = category;
    product.tags = tags;
    product.originalPrice = originalPrice;
    product.discountPrice = discountPrice;
    product.stock = stock;
    product.details = details;
    

    await product.save()
    res.status(201).json({
      success: true,
      product,
    });


    
  } catch (error) {
    return next(new ErrorHandler(error,400))
  }
}))


//get all products

router.get(
  "/get-all-products-shop/:id",
  catchAsyncError(async (req, res, next) => {
    try {
      const products = await Product.find({ shopId: req.params.id });

      res.status(201).json({
        success: true,
        products,
      });
    } catch (error) {
      return next(new ErrorHandler(error, 400));
    }
  })
);

// delete product
router.delete('/delete-shop-product/:id',isSeller, catchAsyncError(async(req,res,next)=>{
  try {
    const productId = req.params.id;
    const productData = await Product.findById(productId)
  
    productData.images.forEach((imgUrl)=>{
      const filename = imgUrl;
      const filePath = `uploads/${filename}`

      fs.unlink(filePath,(err)=>{
        if(err){
          console.log(err)
        }
      })
    })

    const product = await Product.findByIdAndDelete(productId)
    if(!product){
      return next (new ErrorHandler("Product not found with this id",500))
    }
    res.status(201).json({
      success:true,
      message:"Product Deleted Successfully!"
    })

  } catch (error) {
    return next(new ErrorHandler(error,400))
  }
}))





// get all products
router.get(
  "/get-all-products",
  catchAsyncError(async (req, res, next) => {
    try {
      const products = await Product.find().sort({ createdAt: -1 });

      res.status(201).json({
        success: true,
        products,
      });
    } catch (error) {
      return next(new ErrorHandler(error, 400));
    }
  })
);

router.get(
  "/get-product/:id",
  catchAsyncError(async (req, res, next) => {
    try {
    const productId = req.params.id;
      
      const singleProduct = await Product.findById(productId)

      res.status(201).json({
        success: true,
        singleProduct,
      });
    } catch (error) {
      return next(new ErrorHandler(error, 400));
    }
  })
);


// review for a product
router.put(
  "/create-new-review",
  isAuthenticated,
  catchAsyncError(async (req, res, next) => {
    try {
      const { user, rating, comment, productId, orderId } = req.body;

      const product = await Product.findById(productId);

      const review = {
        user,
        rating,
        comment,
        productId,
      };

      const isReviewed = product.reviews.find(
        (rev) => rev.user._id === req.user._id
      );

      if (isReviewed) {
        product.reviews.forEach((rev) => {
          if (rev.user._id === req.user._id) {
            (rev.rating = rating), (rev.comment = comment), (rev.user = user);
          }
        });
      } else {
        product.reviews.push(review);
      }

      let avg = 0;

      product.reviews.forEach((rev) => {
        avg += rev.rating;
      });

      product.ratings = avg / product.reviews.length;

      await product.save({ validateBeforeSave: false });

      await Order.findByIdAndUpdate(
        orderId,
        { $set: { "cart.$[elem].isReviewed": true } },
        { arrayFilters: [{ "elem._id": productId }], new: true }
      );

      res.status(200).json({
        success: true,
        message: "Reviwed succesfully!",
      });
    } catch (error) {
      return next(new ErrorHandler(error, 400));
    }
  })
);


router.get(
  "/admin-all-products",
  isAuthenticated,
  isAdmin("Admin"),
  catchAsyncError(async (req, res, next) => {
    try {
      const products = await Product.find().sort({
        createdAt: -1,
      });
      res.status(201).json({
        success: true,
        products,
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  })
);
module.exports = router;
