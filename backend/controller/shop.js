const express = require("express");
const path = require("path");
const router = express.Router();
const fs = require("fs");
const jwt = require("jsonwebtoken");
const sendMail = require("../utils/sendMail");
const sendToken = require("../utils/jwtToken");
const { isAuthenticated } = require("../middleware/auth");
const Shop = require('../model/shop')

router.post("/create-shop", upload.single("file"), async(req,res,next) =>{
    try {
        const {email} = req.body;
        const sellerEmail = await Shop.findOne({email});
        if (sellerEmail) {
            const filename = req.file.filename;
            const filePath = `uploads/${filename}`;
            fs.unlink(filePath, (err) => {
              if (err) {
                console.log(err);
                res.status(500).json({ message: "Error deleting file" });
              }
            });
            return next(new ErrorHandler("User already exists", 400));
          }
      


    } catch (error) {
    return next(new ErrorHandler(error.message, 400));
        
    }
})





module.exports = router;
