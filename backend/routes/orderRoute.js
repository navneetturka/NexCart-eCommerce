import express from "express";
import {
  placeOrder,
  placeOrderStripe,
  placeOrderRazorpay,
  verifyStripe,
  verifyRazorpay,
  allOrders,
  userOrders,
  updateStatus,
} from "../controllers/orderController.js";
import adminAuth from "../middleware/adminAuth.js";
import userAuth from "../middleware/userAuth.js";

const orderRouter = express.Router();

// ─── Admin Routes ─────────────────────────────────────────────────────────────
orderRouter.post("/list", adminAuth, allOrders);
orderRouter.post("/status", adminAuth, updateStatus);

// ─── Payment Routes ───────────────────────────────────────────────────────────
orderRouter.post("/place", userAuth, placeOrder);           // COD
orderRouter.post("/stripe", userAuth, placeOrderStripe);    // Stripe
orderRouter.post("/razorpay", userAuth, placeOrderRazorpay);// Razorpay

// ─── User Routes ──────────────────────────────────────────────────────────────
orderRouter.post("/userorders", userAuth, userOrders);

// ─── Verify Payments ──────────────────────────────────────────────────────────
orderRouter.post("/verifyStripe", userAuth, verifyStripe);
orderRouter.post("/verifyRazorpay", userAuth, verifyRazorpay);

export default orderRouter;
