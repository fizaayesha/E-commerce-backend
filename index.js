const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const UserRouter = require("./routes/user");
const RegisterRouter = require("./routes/auth");
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
app.use("/api/users", RegisterRouter);
app.listen(process.env.PORT, () => {
  console.log("Server is running");
});