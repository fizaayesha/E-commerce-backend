const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const UserRouter = require("./routes/user");
const AuthRouter = require("./routes/auth");
const ProductRouter = require("./routes/product");
const OrderRouter = require("./routes/order");
const CartRouter = require("./routes/cart");
const stripeRouter = require("./routes/stripe")
const cors = require("cors");
dotenv.config();
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Database connnection established");
  })
  .catch((err) => {
    console.log(err);
  });
  app.use(cors())
app.use(express.json());
app.use("/api/users", UserRouter);
app.use("/api/auth", AuthRouter);
app.use("/api/products", ProductRouter);
app.use("/api/carts", CartRouter);
app.use("/api/orders", OrderRouter);
app.use("/api/checkout", stripeRouter);
app.listen(process.env.PORT, () => {
  console.log("Server is running");
});
