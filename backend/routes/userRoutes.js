import express from "express";

import {
  authUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  registerUser,
} from "../controllers/userController.js";

const userRoutes = express.Router();

userRoutes.post("/", registerUser);
userRoutes.post("/auth", authUser);
userRoutes.post("/logout", logoutUser);
userRoutes.route("/profile").get(getUserProfile).put(updateUserProfile);

export { userRoutes };
