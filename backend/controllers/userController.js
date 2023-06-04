import expressAsyncHandler from "express-async-handler";

export const registerUser = expressAsyncHandler(async (req, res) => {
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
