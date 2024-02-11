const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");

// middlewares

app.use(
  cors({
    origin: ["http://localhost:5173", "https://school-web-sakil.netlify.app"],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

//routes

const productRoute = require("./routes/v1/product.route");

app.use("/api/v1/teacher", productRoute);

module.exports = app;
