const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const UserRouter = require("./routes/user");
const AuthRouter = require("./routes/auth");
const ProductRouter = require("./routes/product");
const OrderRouter = require("./routes/order");
const CartRouter = require("./routes/cart");
dotenv.config();
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Database connnection established");
  })
  .catch((err) => {
    console.log(err);
  });
app.use(express.json());
app.use("/api/users", UserRouter);
app.use("/api/auth", AuthRouter);
app.use("/api/products", ProductRouter);
app.use("/api/carts", CartRouter);
app.use("/api/orders", ProductRouter);
app.listen(process.env.PORT, () => {
  console.log("Server is running");
});