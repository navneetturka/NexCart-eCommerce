// ─── Seed Script ─────────────────────────────────────────────────────────────
// Run this ONCE to insert all products into MongoDB:
//   node seedProducts.js
// ─────────────────────────────────────────────────────────────────────────────

import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  image: Array,
  category: String,
  subCategory: String,
  sizes: Array,
  bestseller: Boolean,
  date: Number,
});

const productModel =
  mongoose.models.product || mongoose.model("product", productSchema);

// Using real placeholder fashion images from picsum (always available)
const img = (id) => `https://picsum.photos/seed/${id}/400/500`;

const products = [
  { name: "Women Round Neck Cotton Top", description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.", price: 300, image: [img("w1")], category: "Women", subCategory: "Topwear", sizes: ["S","M","L"], date: 1716634345448, bestseller: true },
  { name: "Men Round Neck Pure Cotton T-shirt", description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.", price: 300, image: [img("m1"),img("m2"),img("m3"),img("m4")], category: "Men", subCategory: "Topwear", sizes: ["M","L","XL"], date: 1716621345448, bestseller: true },
  { name: "Girls Round Neck Cotton Top", description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.", price: 350, image: [img("k1")], category: "Kids", subCategory: "Topwear", sizes: ["S","L","XL"], date: 1716234545448, bestseller: true },
  { name: "Men Round Neck Pure Cotton T-shirt", description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.", price: 340, image: [img("m5")], category: "Men", subCategory: "Topwear", sizes: ["S","M","XXL"], date: 1716621345448, bestseller: true },
  { name: "Women Round Neck Cotton Top", description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.", price: 330, image: [img("w2")], category: "Women", subCategory: "Topwear", sizes: ["M","L","XL"], date: 1716622345448, bestseller: true },
  { name: "Girls Round Neck Cotton Top", description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.", price: 340, image: [img("k2")], category: "Kids", subCategory: "Topwear", sizes: ["S","L","XL"], date: 1716623423448, bestseller: true },
  { name: "Men Tapered Fit Flat-Front Trousers", description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.", price: 780, image: [img("m6")], category: "Men", subCategory: "Bottomwear", sizes: ["S","L","XL"], date: 1716621542448, bestseller: false },
  { name: "Men Round Neck Pure Cotton T-shirt", description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.", price: 440, image: [img("m7")], category: "Men", subCategory: "Topwear", sizes: ["S","M","L","XL"], date: 1716622345448, bestseller: false },
  { name: "Girls Round Neck Cotton Top", description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.", price: 500, image: [img("k3")], category: "Kids", subCategory: "Topwear", sizes: ["M","L","XL"], date: 1716621235448, bestseller: false },
  { name: "Men Tapered Fit Flat-Front Trousers", description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.", price: 810, image: [img("m8")], category: "Men", subCategory: "Bottomwear", sizes: ["S","M","L","XL"], date: 1716621235448, bestseller: false },
  { name: "Men Round Neck Pure Cotton T-shirt", description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.", price: 570, image: [img("m9")], category: "Men", subCategory: "Topwear", sizes: ["S","M","L","XL"], date: 1716631235448, bestseller: false },
  { name: "Women Round Neck Cotton Top", description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.", price: 630, image: [img("w3")], category: "Women", subCategory: "Topwear", sizes: ["S","M","L","XL"], date: 1716632345448, bestseller: false },
  { name: "Men Round Neck Pure Cotton T-shirt", description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.", price: 380, image: [img("m10")], category: "Men", subCategory: "Topwear", sizes: ["S","M","L"], date: 1716633445448, bestseller: false },
  { name: "Women Zip-Front Relaxed Fit Jacket", description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.", price: 1590, image: [img("w4")], category: "Women", subCategory: "Winterwear", sizes: ["S","M","L","XL"], date: 1716634545448, bestseller: false },
  { name: "Kid Tapered Slim Fit Trouser", description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.", price: 560, image: [img("k4")], category: "Kids", subCategory: "Bottomwear", sizes: ["S","M","L","XL"], date: 1716635645448, bestseller: false },
  { name: "Men Slim Fit Relaxed Denim Jacket", description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.", price: 1490, image: [img("m11")], category: "Men", subCategory: "Winterwear", sizes: ["S","M","L","XL"], date: 1716636745448, bestseller: false },
  { name: "Women Round Neck Cotton Top", description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.", price: 450, image: [img("w5")], category: "Women", subCategory: "Topwear", sizes: ["S","M","L","XL"], date: 1716637845448, bestseller: false },
  { name: "Boy Round Neck Pure Cotton T-shirt", description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.", price: 350, image: [img("k5")], category: "Kids", subCategory: "Topwear", sizes: ["S","M","L","XL"], date: 1716638945448, bestseller: false },
  { name: "Women Zip-Front Relaxed Fit Jacket", description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.", price: 1180, image: [img("w6")], category: "Women", subCategory: "Winterwear", sizes: ["S","M","L","XL"], date: 1716640045448, bestseller: false },
  { name: "Men Slim Fit Relaxed Denim Jacket", description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.", price: 1320, image: [img("m12")], category: "Men", subCategory: "Winterwear", sizes: ["S","M","L","XL"], date: 1716641145448, bestseller: false },
  { name: "Women Round Neck Cotton Top", description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.", price: 580, image: [img("w7")], category: "Women", subCategory: "Topwear", sizes: ["S","M","L","XL"], date: 1716642245448, bestseller: false },
  { name: "Kid Tapered Slim Fit Trouser", description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.", price: 690, image: [img("k6")], category: "Kids", subCategory: "Bottomwear", sizes: ["S","M","L","XL"], date: 1716643345448, bestseller: false },
  { name: "Men Slim Fit Relaxed Denim Jacket", description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.", price: 1540, image: [img("m13")], category: "Men", subCategory: "Winterwear", sizes: ["S","M","L","XL"], date: 1716644445448, bestseller: false },
  { name: "Women Zip-Front Relaxed Fit Jacket", description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.", price: 1050, image: [img("w8")], category: "Women", subCategory: "Winterwear", sizes: ["S","M","L","XL"], date: 1716645545448, bestseller: false },
  { name: "Women Round Neck Cotton Top", description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.", price: 470, image: [img("w9")], category: "Women", subCategory: "Topwear", sizes: ["S","M","L","XL"], date: 1716646645448, bestseller: false },
  { name: "Men Round Neck Pure Cotton T-shirt", description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.", price: 410, image: [img("m14")], category: "Men", subCategory: "Topwear", sizes: ["S","M","L","XL"], date: 1716647745448, bestseller: false },
  { name: "Women Zip-Front Relaxed Fit Jacket", description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.", price: 980, image: [img("w10")], category: "Women", subCategory: "Winterwear", sizes: ["S","M","L","XL"], date: 1716648845448, bestseller: false },
  { name: "Men Printed Plain Cotton Shirt", description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.", price: 560, image: [img("m15")], category: "Men", subCategory: "Topwear", sizes: ["S","M","L","XL"], date: 1716649745448, bestseller: false },
  { name: "Women Round Neck Cotton Top", description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.", price: 420, image: [img("w11")], category: "Women", subCategory: "Winterwear", sizes: ["S","M","L","XL"], date: 1716649745448, bestseller: false },
  { name: "Women Zip-Front Relaxed Fit Jacket", description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.", price: 700, image: [img("w12")], category: "Women", subCategory: "Winterwear", sizes: ["S","M","L","XL"], date: 1716650845448, bestseller: false },
  { name: "Women Round Neck Cotton Top", description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.", price: 520, image: [img("w13")], category: "Women", subCategory: "Topwear", sizes: ["S","M","L","XL"], date: 1716651945448, bestseller: false },
  { name: "Men Round Neck Pure Cotton T-shirt", description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.", price: 480, image: [img("m16")], category: "Men", subCategory: "Topwear", sizes: ["S","M","L","XL"], date: 1716653045448, bestseller: false },
  { name: "Men Printed Plain Cotton Shirt", description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.", price: 600, image: [img("m17")], category: "Men", subCategory: "Topwear", sizes: ["S","M","L","XL"], date: 1716654145448, bestseller: false },
  { name: "Men Slim Fit Relaxed Denim Jacket", description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.", price: 1490, image: [img("m18")], category: "Men", subCategory: "Winterwear", sizes: ["S","M","L","XL"], date: 1716655245448, bestseller: false },
  { name: "Men Round Neck Pure Cotton T-shirt", description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.", price: 370, image: [img("m19")], category: "Men", subCategory: "Topwear", sizes: ["S","M","L","XL"], date: 1716656345448, bestseller: false },
  { name: "Boy Round Neck Pure Cotton T-shirt", description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.", price: 400, image: [img("k7")], category: "Kids", subCategory: "Topwear", sizes: ["S","M","L","XL"], date: 1716657445448, bestseller: false },
  { name: "Kid Tapered Slim Fit Trouser", description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.", price: 800, image: [img("k8")], category: "Kids", subCategory: "Bottomwear", sizes: ["S","M","L","XL"], date: 1716658545448, bestseller: false },
  { name: "Women Zip-Front Relaxed Fit Jacket", description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.", price: 1310, image: [img("w14")], category: "Women", subCategory: "Winterwear", sizes: ["S","M","L","XL"], date: 1716659645448, bestseller: false },
  { name: "Men Slim Fit Relaxed Denim Jacket", description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.", price: 1150, image: [img("m20")], category: "Men", subCategory: "Winterwear", sizes: ["S","M","L","XL"], date: 1716660745448, bestseller: false },
  { name: "Men Slim Fit Relaxed Denim Jacket", description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.", price: 1400, image: [img("m21")], category: "Men", subCategory: "Winterwear", sizes: ["S","M","L","XL"], date: 1716661845448, bestseller: false },
  { name: "Kid Tapered Slim Fit Trouser", description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.", price: 1300, image: [img("k9")], category: "Kids", subCategory: "Bottomwear", sizes: ["S","M","L","XL"], date: 1716662945448, bestseller: false },
  { name: "Men Slim Fit Relaxed Denim Jacket", description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.", price: 1230, image: [img("m22")], category: "Men", subCategory: "Winterwear", sizes: ["S","M","L","XL"], date: 1716664045448, bestseller: false },
  { name: "Kid Tapered Slim Fit Trouser", description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.", price: 900, image: [img("k10")], category: "Kids", subCategory: "Bottomwear", sizes: ["S","M","L","XL"], date: 1716665145448, bestseller: false },
  { name: "Kid Tapered Slim Fit Trouser", description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.", price: 840, image: [img("k11")], category: "Kids", subCategory: "Bottomwear", sizes: ["S","M","L","XL"], date: 1716666245448, bestseller: false },
  { name: "Women Zip-Front Relaxed Fit Jacket", description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.", price: 1300, image: [img("w15")], category: "Women", subCategory: "Winterwear", sizes: ["S","M","L","XL"], date: 1716667345448, bestseller: false },
  { name: "Men Slim Fit Relaxed Denim Jacket", description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.", price: 1500, image: [img("m23")], category: "Men", subCategory: "Winterwear", sizes: ["S","M","L","XL"], date: 1716668445448, bestseller: false },
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("✅ MongoDB Connected");

    await productModel.deleteMany({});
    console.log("🗑️  Old products cleared");

    await productModel.insertMany(products);
    console.log(`✅ ${products.length} products inserted successfully!`);

    mongoose.connection.close();
    console.log("🔌 Connection closed");
  } catch (error) {
    console.error("❌ Error:", error);
    process.exit(1);
  }
};

seedDB();