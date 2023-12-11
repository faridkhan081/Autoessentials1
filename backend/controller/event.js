const express = require("express");
const { isSeller, isAdmin , isAuthenticated } = require("../middleware/auth");
const router = express.Router();
const Event = require("../model/event");
const Product = require("../model/product");
const catchAsyncError = require("../middleware/catchAsyncError");
const ErrorHandler = require("../utils/ErrorHandler");
const { upload } = require("../multer");
const Shop = require("../model/shop");
const fs = require('fs')
// create event

router.post(
  "/create-event",
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

        const eventData = req.body;
        eventData.images = imageUrls;
        eventData.shop = shop;

        const product = await Event.create(eventData);
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

//get all events of a shop

router.get(
  "/get-all-events/:id",
  catchAsyncError(async (req, res, next) => {
    try {
      const events = await Event.find({ shopId: req.params.id });

      res.status(201).json({
        success: true,
        events,
      });
    } catch (error) {
      return next(new ErrorHandler(error, 400));
    }
  })
);


router.get('/get-all-events', catchAsyncError(async(req,res,next)=>{
  try {
    const events = await Event.find();
    res.status(201).json({
      success: true,
      events
    })
    
  } catch (error) {
    return next(new ErrorHandler(error,400))
  }
}))

// delete event product
router.delete('/delete-shop-event/:id', catchAsyncError(async(req,res,next)=>{
  try {
    const productId = req.params.id;
    const eventData = await Event.findById(productId)

    eventData.images.forEach((imgUrls)=>{
      const fileName = imgUrls;
      const filePath = `uploads/${fileName}`
      fs.unlink(filePath,(err)=>{
        if(err){
          console.log(err);
        }
      })
    })


    const event = await Event.findByIdAndDelete(productId)
    if(!event){
      return next (new ErrorHandler("Event not found with this id",500))
    }
   

    res.status(201).json({
      success:true,
      message: "Event Deleted Successfully!"
    })

  } catch (error) {
    return next(new ErrorHandler(error,400))
  }
}))


router.get(
  "/admin-all-events",
  isAuthenticated,
  isAdmin("Admin"),
  catchAsyncError(async (req, res, next) => {
    try {
      const events = await Event.find().sort({
        createdAt: -1,
      });
      res.status(201).json({
        success: true,
        events,
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  })
);

module.exports = router;



