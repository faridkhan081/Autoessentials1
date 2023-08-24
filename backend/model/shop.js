const mongoose = require("mongoose");


const shopSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter your shop name!"],
  },
  email: {
    type: String,
    required: [true, "Please enter your shop email address!"],
  },
  password: {
    type: String,
    required: [true, "Please enter your password"],
    minLength: [4, "Password should be greater than 4 characters"],
    select: false,
  },
  phoneNumber: {
    type: Number,
    required: true, 
  },
  address: {
    type: String,
    required : true
    },
  
    description: {
        type: String,
        required : true
        },
  role: {
    type: String,
    default: "seller",
  },
  avatar: {
    type: String,
    required: true, 
  },
  zipCode: {
    type: Number,
    required: true, 
  },

  createdAt: {
    type: Date,
    default: Date.now(),
  },

  resetPasswordToken: String,
  resetPasswordTime: Date,
  
});


//  Hash password
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
      next();
    }
  
    this.password = await bcrypt.hash(this.password, 10);
  });
  
  // jwt token
  userSchema.methods.getJwtToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: process.env.JWT_EXPIRES,
    });
  };
  
  // compare password
  userSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
  };



module.exports = mongoose.model("Shop", shopSchema);
