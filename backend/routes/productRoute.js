import express from "express";
import {
  addProduct,
  removeProduct,
  listProducts,
  singleProduct,
} from "../controllers/productController.js";
import upload from "../middleware/multer.js";
import adminAuth from "../middleware/adminAuth.js";

const productRouter = express.Router();

// Add product — admin only, with image upload (up to 4 images)
productRouter.post(
  "/add",
  adminAuth,
  upload.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
    { name: "image3", maxCount: 1 },
    { name: "image4", maxCount: 1 },
  ]),
  addProduct
);

productRouter.post("/remove", adminAuth, removeProduct);
productRouter.post("/single", singleProduct);       // public
productRouter.get("/list", listProducts);           // public

export default productRouter;
