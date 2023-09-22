const express = require("express");
const { isSeller} = require("../middleware/auth");
const router = express.Router();
const Shop = require("../model/shop");
const Product = require("../model/product");
const catchAsyncError = require("../middleware/catchAsyncError");
const ErrorHandler = require("../utils/ErrorHandler");
const { upload } = require("../multer");
const fs = require('fs')
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
module.exports = router;
