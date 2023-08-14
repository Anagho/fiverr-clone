import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/userRoute.js";
import conversationRoute from "./routes/conversationRoute.js";
import gigRoute from "./routes/gigRoute.js";
import messageRoute from "./routes/messageRoute.js";
import orderRoute from "./routes/orderRoute.js";
import reviewRoute from "./routes/reviewRoute.js";
import authRoute from "./routes/authRoute.js";


// initialize express server
const app = express();
dotenv.config();
const PORT = process.env.PORT || 3500;
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

// To allow the app take inputs from users
app.use(express.json())

// Implement the routes
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/gigs", gigRoute);
app.use("/api/orders", orderRoute);
app.use("/api/conversations", conversationRoute);
app.use("/api/messages", messageRoute);
app.use("/api/reviews", reviewRoute);

app.listen(PORT, () => {
  connectDB();
  mongoose.connection.once('open', () => {
    console.log("Connected to MongoDB");
  })
  console.log(`Server running on port ${PORT}`);
});
