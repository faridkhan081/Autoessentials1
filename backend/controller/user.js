const express = require("express");
const path = require("path");
const User = require("../model/user");
const router = express.Router();
const { upload } = require("../multer");
const ErrorHandler = require("../utils/ErrorHandler");
const catchAsyncError = require("../middleware/catchAsyncError");
const fs = require("fs");
const jwt = require("jsonwebtoken");
const sendMail = require("../utils/sendMail");
const { createActivationToken, createResetToken, sendToken } = require("../utils/jwtToken");

const { isAuthenticated, isAdmin } = require("../middleware/auth");

const bcryptjs = require("bcryptjs");


router.post("/forgot-password", catchAsyncError(async (req, res, next) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return next(new ErrorHandler("User not found", 404));
    }
  
    const resetToken = createResetToken(user);

    const resetUrl = `http://localhost:3000/reset-password/${resetToken}`;

    try {
      // Send the reset URL to the user's email using Nodemailer or your preferred email service
      await sendMail({
     


        email: user.email,
        subject: "Reset Your Password",
        emailType: "resetPassword",
        appName: "AutoEssentials", // Replace with your app name
        resetUrl: resetUrl, // Replace with the actual reset URL
        recipientName: user.name,
      });

      res.status(200).json({
        success: true,
        message: "Password reset email sent. Check your inbox.",
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  } catch (error) {
    return next(new ErrorHandler(error.message, 400));
  }
}));



router.post("/reset-password", catchAsyncError(async (req, res, next) => {
  try {
    const { resetToken, password } = req.body;
    const decoded = jwt.verify(resetToken, process.env.RESET_SECRET);

    if (!decoded) {
      return next(new ErrorHandler("Invalid or expired reset token", 400));
    }

    const user = await User.findById(decoded.id);

    if (!user) {
      return next(new ErrorHandler("User not found", 404));
    }

    // Update the user's password
    user.password = password;
    await user.save();

    // You may want to invalidate the reset token after successful use

    res.status(200).json({
      success: true,
      message: "Password reset successful.",
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 500));
  }
}));






router.post("/create-user", upload.single("file"), async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const userEmail = await User.findOne({ email });

    if (userEmail) {
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

    const filename = req.file.filename;
    const fileUrl = path.join(filename);

    const user = {
      name: name,
      email: email,
      password: password,
      avatar: fileUrl,
    };

    const activationToken = createActivationToken(user);

    const activationUrl = `http://localhost:3000/activation/${activationToken}`;

    try {
      await sendMail({
   
        email: user.email,
        subject: "Activate your account",
        emailType: "activation",
        appName: "AutoEssentials", // Replace with your app name
        activationCode: activationUrl, // Use the link in the email body
        recipientName: user.name,
      
      });
      res.status(201).json({
        success: true,
        message: `please check your email:- ${user.email} to activate your account!`,
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  } catch (error) {
    return next(new ErrorHandler(error.message, 400));
  }
});


router.post("/google",async(req,res,next)=>{

  try {
    const user = await User.findOne({ email: req.body.email });
     if (user) {
       const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY);
       const { password: hashedPassword, ...rest } = user._doc;
       const expiryDate = new Date(Date.now() + 3600000); 
       res
         .cookie("token", token, {
           httpOnly: true,
           expires: expiryDate,
         })
         .status(200)
         .json(rest);
     } else {
       const generatedPassword =
         Math.random().toString(36).slice(-8) +
         Math.random().toString(36).slice(-8);
       const hashedPassword = bcryptjs.hashSync(generatedPassword, 10);
       const newUser = new User({
         name:req.body.name.toLowerCase(),
         email: req.body.email,
         password: hashedPassword,
         avatar: req.body.avatar,
       });
       await newUser.save();
       const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET_KEY);
       const { password: hashedPassword2, ...rest } = newUser._doc;
       const expiryDate = new Date(Date.now() + 3600000); 
       res
         .cookie("token", token, {
           httpOnly: true,
           expires: expiryDate,
         })
         .status(200)
         .json(rest);
     }
   }  catch (error) {
    return next(new ErrorHandler(error.message, 400));
  }
})

// // create activation token
// const createActivationToken = (user) => {
//   return jwt.sign(user, process.env.ACTIVATION_SECRET, {
//     expiresIn: "5m",
//   });
// };

// activate user
router.post(
  "/activation",
  catchAsyncError(async (req, res, next) => {
    try {
      const { activation_token } = req.body;

      const newUser = jwt.verify(
        activation_token,
        process.env.ACTIVATION_SECRET
      );

      if (!newUser){
        return next(new ErrorHandler("Invalid token", 400));
      }
      const { name, email, password, avatar } = newUser;

      let user = await User.findOne({ email });

      if (user) {
        return next(new ErrorHandler("User already exists", 400));
      }
      user = await User.create({
        name,
        email,
        avatar,
        password,
      });

      sendToken(user, 201, res);
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  })
);

// login user
router.post(
  "/login-user",
  catchAsyncError(async (req, res, next) => {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return next(new ErrorHandler("Please provide the all fields!", 400));
      }

      const user = await User.findOne({ email }).select("+password");

      if (!user) {
        return next(new ErrorHandler("User doesn't exists!", 400));
      }

      const isPasswordValid = await user.comparePassword(password);

      if (!isPasswordValid) {
        return next(
          new ErrorHandler("Please provide the correct information", 400)
        );
      }

      sendToken(user, 201, res);
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  })
);


// load user 


router.get(
  "/getuser",
  isAuthenticated,
  catchAsyncError(async (req, res, next) => {
    try {
      const user = await User.findById(req.user.id);

      if (!user) {
        return next(new ErrorHandler("User doesn't exists", 400));
      }

      res.status(200).json({
        success: true,
        user,
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  })
);


// log out user

router.get("/logout", isAuthenticated, catchAsyncError(async(req,res,next) =>{
  try {
    res.cookie("token", null,{
      expires: new Date(Date.now()),
      httpOnly: true,
    });

res.status(201).json({
  success: true,
  message: "Logout Successful!"
  
})
    
  } catch (error) {
    return next(new ErrorHandler(error.message, 500));
  }
}))

//update user profile information
router.put('/update-user-info',isAuthenticated,catchAsyncError(async(req,res,next)=>{
try {
  const {email,password,phoneNumber,name} = req.body;
  const user = await User.findOne({email}).select("+password")
  if(!user){
    return next(new ErrorHandler("User doesn't exists", 400));
  }
  const isPasswordValid = await user.comparePassword(password);

  if (!isPasswordValid) {
    return next(
      new ErrorHandler("Please provide the correct information", 400)
    );
  }

  user.name = name
  user.email = email
  user.phoneNumber = phoneNumber
  await user.save()

  res.status(201).json({
    success:true,
    user
  })


} catch (error) {
  return next(new ErrorHandler(error.message,500))
}
}))


// update user avatar
router.put(
  "/update-avatar",
  isAuthenticated,
  upload.single("image"),
  catchAsyncError(async (req, res, next) => {
    try {
      const existsUser = await User.findById(req.user.id);

      console.log(existsUser.avatar);
      const existAvatarPath = path.join(existsUser.avatar); // Use path.join to create an absolute path

      if (fs.existsSync(existAvatarPath)) {
        fs.unlinkSync(existAvatarPath);
      }

      const fileUrl = path.join( req.file.filename); // Use path.join for the new avatar path

      const user = await User.findByIdAndUpdate(req.user.id, {
        avatar: fileUrl,
      });

      res.status(200).json({
        success: true,
        user,
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  })
);


// update user addresses
router.put(
  "/update-user-addresses",
  isAuthenticated,
  catchAsyncError(async (req, res, next) => {
    try {
      const user = await User.findById(req.user.id);

      const sameTypeAddress = user.addresses.find(
        (address) => address.addressType === req.body.addressType
      );
      if (sameTypeAddress) {
        return next(
          new ErrorHandler(`${req.body.addressType} address already exists`)
        );
      }

      const existsAddress = user.addresses.find(
        (address) => address._id === req.body._id
      );

      if (existsAddress) {
        Object.assign(existsAddress, req.body);
      } else {
     
        user.addresses.push(req.body);
      }

      await user.save();

      res.status(200).json({
        success: true,
        user,
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  })
);

// delete user address
router.delete(
  "/delete-user-address/:id",
  isAuthenticated,
  catchAsyncError(async (req, res, next) => {
    try {
      const userId = req.user._id;
      const addressId = req.params.id;

      console.log(addressId);

      await User.updateOne(
        {
          _id: userId,
        },
        { $pull: { addresses: { _id: addressId } } }
      );

      const user = await User.findById(userId);

      res.status(200).json({ success: true, user });
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  })
);

// update user password
router.put(
  "/update-user-password",
  isAuthenticated,
  catchAsyncError(async (req, res, next) => {
    try {
      const user = await User.findById(req.user.id).select("+password");

      const isPasswordMatched = await user.comparePassword(
        req.body.oldPassword
      );

      if (!isPasswordMatched) {
        return next(new ErrorHandler("Old password is incorrect!", 400));
      }

      if (req.body.newPassword !== req.body.confirmPassword) {
        return next(
          new ErrorHandler("Password doesn't matched with each other!", 400)
        );
      }
      user.password = req.body.newPassword;

      await user.save();

      res.status(200).json({
        success: true,
        message: "Password updated successfully!",
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  })
);


// find user infoormation with the userId
router.get(
  "/user-info/:id",
  catchAsyncError(async (req, res, next) => {
    try {
      const user = await User.findById(req.params.id);

      res.status(201).json({
        success: true,
        user,
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  })
);



// all users --- for admin
router.get(
  "/all-users",
  isAuthenticated,
  
  catchAsyncError(async (req, res, next) => {
    try {
      const users = await User.find().sort({
        createdAt: -1,
      });
      res.status(201).json({
        success: true,
        users,
      });
   
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  })
);



  // update shop status ---admin
  router.put(
    '/update-user-role/:id',
    isAuthenticated,
    isAdmin("Admin"),
    catchAsyncError(async (req, res, next) => {
      try {
        const user = await User.findById(req.params.id);
    
        if (!user) {
          return next(new ErrorHandler('User is not available with this id', 400));
        }
    
        const { newRole } = req.body;
    
        // Assuming that 'newRole' is a valid role value
        user.role = newRole;
        await user.save();
    
        res.status(201).json({
          success: true,
          message: 'User role updated successfully!',
        });
      } catch (error) {
        return next(new ErrorHandler(error.message, 500));
      }
    })
  );


// delete users --- admin
router.delete(
  "/delete-user/:id",
  isAuthenticated,
  isAdmin("Admin"),
  catchAsyncError(async (req, res, next) => {
    try {
      const user = await User.findById(req.params.id);

      if (!user) {
        return next(
          new ErrorHandler("User is not available with this id", 400)
        );
      }

      await User.findByIdAndDelete(req.params.id);

      res.status(201).json({
        success: true,
        message: "User deleted successfully!",
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  })
);


module.exports = router;

