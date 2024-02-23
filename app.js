const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");

// middlewares

app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

//routes

const productRoute = require("./routes/v1/product.route");
const userRoute = require("./routes/v1/user.route");

app.use("/api/v1/product", productRoute);
app.use("/api/v1/user", userRoute);

module.exports = app;
