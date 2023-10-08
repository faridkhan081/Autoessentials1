const express = require("express");
const ErrorHandler = require("./middleware/error");
const app = express();

const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');

const path = require('path');

app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin:'http://localhost:3000',
  credentials:true,
}));


app.use('/', express.static(path.join(__dirname, './uploads')));
app.use('/test', (req, res) => {
  res.send('Hello world!');
});

app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));




//config
if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({
      path: "backend/config/.env",
    });
  }


  // import routes

  const user = require('./controller/user');
  const shop = require('./controller/shop');
  const product = require('./controller/product');
  const event = require('./controller/event');
  const coupon = require('./controller/couponCode');


  app.use('/api/v2/user', user);
  app.use("/api/v2/shop", shop);
  app.use("/api/v2/product", product);
  app.use("/api/v2/event", event);
  app.use("/api/v2/coupon", coupon);

  // its for Error Handling
  app.use(ErrorHandler);
module.exports = app;