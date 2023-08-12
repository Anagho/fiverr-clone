import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT || 3500;

// initialize express server
const app = express();
mongoose.set("strictQuery", true);

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    
  } catch (err) {
    console.log(err);
  }
};

app.listen(PORT, () => {
  connectDB();
  mongoose.connection.once('open', () => {
    console.log("Connected to MongoDB");
  })
  console.log(`Server running on port ${PORT}`);
});
