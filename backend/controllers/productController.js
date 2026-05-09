import { v2 as cloudinary } from "cloudinary";
import mongoose from "mongoose";
import productModel from "../models/productModel.js";

const ALLOWED_CATEGORIES = ["Men", "Women", "Kids"];
const ALLOWED_SUBCATEGORIES = ["Topwear", "Bottomwear", "Winterwear"];

const uploadBufferToCloudinary = (buffer) => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { resource_type: "image", folder: "nexcart_products" },
      (err, result) => {
        if (err) reject(err);
        else resolve(result.secure_url);
      }
    );
    stream.end(buffer);
  });
};

const parseSizes = (raw) => {
  if (Array.isArray(raw)) return raw;
  if (typeof raw === "string") {
    try {
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }
  return [];
};

const parseBestseller = (raw) => {
  if (typeof raw === "boolean") return raw;
  if (raw === "true" || raw === true) return true;
  if (raw === "false" || raw === false) return false;
  return false;
};

// ─── Add Product ──────────────────────────────────────────────────────────────
const addProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      category,
      subCategory,
      sizes: sizesRaw,
      bestseller: bestsellerRaw,
    } = req.body;

    const nameTrim = (name || "").trim();
    const descriptionTrim = (description || "").trim();
    const categoryTrim = (category || "").trim();
    const subCategoryTrim = (subCategory || "").trim();

    if (!nameTrim || nameTrim.length < 2) {
      return res.status(400).json({
        success: false,
        message: "Product name is required (min 2 characters).",
      });
    }

    if (!descriptionTrim || descriptionTrim.length < 5) {
      return res.status(400).json({
        success: false,
        message: "Description is required (min 5 characters).",
      });
    }

    const priceNum = Number(price);
    if (!Number.isFinite(priceNum) || priceNum <= 0) {
      return res.status(400).json({
        success: false,
        message: "Valid price greater than 0 is required.",
      });
    }

    if (!ALLOWED_CATEGORIES.includes(categoryTrim)) {
      return res.status(400).json({
        success: false,
        message: `Category must be one of: ${ALLOWED_CATEGORIES.join(", ")}.`,
      });
    }

    if (!ALLOWED_SUBCATEGORIES.includes(subCategoryTrim)) {
      return res.status(400).json({
        success: false,
        message: `Sub category must be one of: ${ALLOWED_SUBCATEGORIES.join(", ")}.`,
      });
    }

    const sizes = parseSizes(sizesRaw);
    if (sizes.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Select at least one product size.",
      });
    }

    const image1 = req.files?.image1?.[0];
    const image2 = req.files?.image2?.[0];
    const image3 = req.files?.image3?.[0];
    const image4 = req.files?.image4?.[0];

    const fileSlots = [image1, image2, image3, image4].filter(Boolean);

    if (fileSlots.length === 0) {
      return res.status(400).json({
        success: false,
        message: "At least one product image is required.",
      });
    }

    const imagesUrl = await Promise.all(
      fileSlots.map((file) => uploadBufferToCloudinary(file.buffer))
    );

    const productData = {
      name: nameTrim,
      description: descriptionTrim,
      category: categoryTrim,
      subCategory: subCategoryTrim,
      price: priceNum,
      sizes,
      bestseller: parseBestseller(bestsellerRaw),
      image: imagesUrl,
      date: Date.now(),
    };

    const product = new productModel(productData);
    await product.save();

    return res.status(201).json({ success: true, message: "Product Added" });
  } catch (error) {
    console.error(error);
    const statusCode = error?.http_code || error?.status;
    if (statusCode === 403) {
      return res.status(500).json({
        success: false,
        message:
          "Cloudinary upload failed (403). Check CLOUDINARY_NAME / CLOUDINARY_API_KEY / CLOUDINARY_SECRET_KEY in backend .env and restart server.",
      });
    }
    return res.status(500).json({
      success: false,
      message: error.message || "Failed to add product.",
    });
  }
};

// ─── Remove Product ───────────────────────────────────────────────────────────
const removeProduct = async (req, res) => {
  try {
    const { id } = req.body;
    if (!id || !mongoose.isValidObjectId(id)) {
      return res.status(400).json({
        success: false,
        message: "Valid product id is required.",
      });
    }

    const deleted = await productModel.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: "Product not found.",
      });
    }

    return res.json({ success: true, message: "Product Removed" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: error.message || "Failed to remove product.",
    });
  }
};

// ─── List All Products ────────────────────────────────────────────────────────
const listProducts = async (req, res) => {
  try {
    const products = await productModel.find({}).sort({ date: -1 });
    return res.json({ success: true, products });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: error.message || "Failed to list products.",
    });
  }
};

// ─── Single Product ───────────────────────────────────────────────────────────
const singleProduct = async (req, res) => {
  try {
    const { productId } = req.body;
    if (!productId || !mongoose.isValidObjectId(productId)) {
      return res.status(400).json({
        success: false,
        message: "Valid productId is required.",
      });
    }

    const product = await productModel.findById(productId);
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found.",
      });
    }

    return res.json({ success: true, product });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: error.message || "Failed to fetch product.",
    });
  }
};

export { addProduct, removeProduct, listProducts, singleProduct };
