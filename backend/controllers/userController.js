import expressAsyncHandler from "express-async-handler";

import { User } from "../models/useModel.js";

export const registerUser = expressAsyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const isUserExist = await User.findOne({ email });

  if (isUserExist) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = User.create({
    name,
    email,
    password,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("The data is invalid");
  }
  res.status(200).json({ message: "Register User" });
});

export const authUser = expressAsyncHandler(async (req, res) => {
  res.status(200).json({ message: "Auth User" });
});

export const logoutUser = expressAsyncHandler(async (req, res) => {
  res.status(200).json({ message: "Logout User" });
});

export const getUserProfile = expressAsyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get User Profile" });
});

export const updateUserProfile = expressAsyncHandler(async (req, res) => {
  res.status(200).json({ message: "Update User Profile" });
});
