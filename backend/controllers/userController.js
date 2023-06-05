import expressAsyncHandler from "express-async-handler";

import { User } from "../models/useModel.js";

import { generateToken } from "../utils/generateToken.js";

export const registerUser = expressAsyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const isUserExist = await User.findOne({ email });

  if (isUserExist) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    generateToken(res, user._id);
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
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
  res.status(200).json({ message: "Auth User" });
});

export const logoutUser = expressAsyncHandler(async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: "Logout" });
});

export const getUserProfile = expressAsyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get User Profile" });
});

export const updateUserProfile = expressAsyncHandler(async (req, res) => {
  res.status(200).json({ message: "Update User Profile" });
});
