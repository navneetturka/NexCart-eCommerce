import express from "express";
import {
  loginUser,
  registerUser,
  adminLogin,
  getUserCart,
  addToCart,
  updateCart,
} from "../controllers/userController.js";
import userAuth from "../middleware/userAuth.js";

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.post("/admin", adminLogin);

// Cart routes (protected)
userRouter.post("/getcart", userAuth, getUserCart);
userRouter.post("/addtocart", userAuth, addToCart);
userRouter.post("/updatecart", userAuth, updateCart);

export default userRouter;
