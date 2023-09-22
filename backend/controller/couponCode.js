const express = require("express");
const catchAsyncError = require("../middleware/catchAsyncError");
const Shop = require("../model/shop");
const ErrorHandler = require("../utils/ErrorHandler");
const { isSeller } = require("../middleware/auth");
const CouponCode = require("../model/couponCode");
const router = express.Router();

// creating coupoun code

router.post(
  "/create-coupon-code",isSeller,
  catchAsyncError(async (req, res, next) => {
    try {
      const isCouponCodeExists = await CouponCode.find({
        name: req.body.name,
      });
      if (isCouponCodeExists) {
        return next(new ErrorHandler("Coupon Code Already Exists", 400));
      }

      const couponCode = await CouponCode.create(req.body);

      res.status(201).json({
        success: true,
        couponCode,
      });
    } catch (error) {
      return next(new ErrorHandler(error, 400));
    }
  })
);
