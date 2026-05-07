import express from "express";

import {
  loginUser,
  registerUser,
  adminLogin,
  getUserCart,
  addToCart,
  updateCart,
  googleLogin,
  forgotPassword, 
  resetPassword
} from "../controllers/userController.js";
import userAuth from "../middleware/userAuth.js";

const userRouter = express.Router();

userRouter.post("/google", googleLogin);

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.post("/admin", adminLogin);


userRouter.post("/forgot-password", forgotPassword);
userRouter.post("/reset-password/:token", resetPassword);

// Cart routes (protected)
userRouter.post("/getcart", userAuth, getUserCart);
userRouter.post("/addtocart", userAuth, addToCart);
userRouter.post("/updatecart", userAuth, updateCart);

export default userRouter;
