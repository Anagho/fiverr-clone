import User from "../models/userModel.js";
import bcrypt from "bcrypt";

// Register function
export const register = async (req, res) => {
  try {
    // Hash password
    const hash = bcrypt.hashSync(req.body.password, 5)
    // Create new user using user model
    const newUser = new User({
        ...req.body,
        password: hash,
    });

    await newUser.save();
    res.status(201).send("User has been created!")
  } catch (err) {
    res.status(500).send("Something went wrong!");
  }
};

// Login function
export const login = async (req, res) => {
  try {
  } catch (err) {}
};

// Logout function
export const logout = async (req, res) => {
  try {
  } catch (err) {}
};
