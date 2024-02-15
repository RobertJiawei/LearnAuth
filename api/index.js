import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("connected to MongoDB");
    app.listen(3000, () => {
      console.log("server listening on port 3000");
    });
  })
  .catch((error) => {
    console.log(error);
  });

const app = express();
