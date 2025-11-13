import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "../models/Product.js";

dotenv.config();

const products = [
  {
    name: "Apple iPhone 17 Pro",
    slug: "iphone-17-pro",
    brand: "Apple",
    description:
      "Apple iPhone 17 Pro – flagship smartphone with stunning camera and A19 Bionic chip.",
    variants: [
      {
        name: "256GB / Silver",
        sku: "IP17P-256-SV",
        mrp: 159900,
        price: 149900,
        images: [
          "https://res.cloudinary.com/dxmmbkhq8/image/upload/v1762950710/ChatGPT_Image_Nov_12_2025_05_48_35_PM_idb8ir.png",
        ],
        emiPlans: [
          {
            tenureMonths: 3,
            interestRateAnnual: 0,
            cashback: 0,
            note: "0% interest for 3 months",
          },
          {
            tenureMonths: 6,
            interestRateAnnual: 10.5,
            cashback: 1500,
            note: "10.5% p.a.",
          },
          {
            tenureMonths: 9,
            interestRateAnnual: 11.0,
            cashback: 2000,
            note: "11% p.a. for 9 months",
          },
          {
            tenureMonths: 12,
            interestRateAnnual: 12.5,
            cashback: 2500,
            note: "12.5% p.a. for 12 months",
          },
          {
            tenureMonths: 18,
            interestRateAnnual: 13.0,
            cashback: 3000,
            note: "13% p.a. for 18 months",
          },
        ],
      },
      {
        name: "512GB / Graphite",
        sku: "IP17P-512-GR",
        mrp: 179900,
        price: 169900,
        images: [
          "https://res.cloudinary.com/dxmmbkhq8/image/upload/v1762955129/ChatGPT_Image_Nov_12_2025_05_49_42_PM_vfbuub.png",
        ],
        emiPlans: [
          {
            tenureMonths: 3,
            interestRateAnnual: 0,
            cashback: 0,
            note: "0% interest for 3 months",
          },
          {
            tenureMonths: 6,
            interestRateAnnual: 10.5,
            cashback: 1500,
            note: "10.5% p.a.",
          },
          {
            tenureMonths: 9,
            interestRateAnnual: 11.0,
            cashback: 2000,
            note: "11% p.a. for 9 months",
          },
          {
            tenureMonths: 12,
            interestRateAnnual: 12.5,
            cashback: 2500,
            note: "12.5% p.a. for 12 months",
          },
          {
            tenureMonths: 18,
            interestRateAnnual: 13.0,
            cashback: 3000,
            note: "13% p.a. for 18 months",
          },
        ],
      },
    ],
  },
  {
    name: "Samsung Galaxy S24 Ultra",
    slug: "samsung-s24-ultra",
    brand: "Samsung",
    description:
      "Samsung Galaxy S24 Ultra with 200MP camera and Snapdragon 8 Gen 3 processor.",
    variants: [
      {
        name: "256GB / Phantom Black",
        sku: "SGS24U-256-PB",
        mrp: 139999,
        price: 129999,
        images: [
          "https://res.cloudinary.com/dxmmbkhq8/image/upload/v1762955141/ChatGPT_Image_Nov_12_2025_05_52_45_PM_uppenf.png",
        ],
        emiPlans: [
          {
            tenureMonths: 3,
            interestRateAnnual: 0,
            cashback: 0,
            note: "0% interest for 3 months",
          },
          {
            tenureMonths: 6,
            interestRateAnnual: 10.5,
            cashback: 1500,
            note: "10.5% p.a.",
          },
          {
            tenureMonths: 9,
            interestRateAnnual: 11.0,
            cashback: 2000,
            note: "11% p.a. for 9 months",
          },
          {
            tenureMonths: 12,
            interestRateAnnual: 12.5,
            cashback: 2500,
            note: "12.5% p.a. for 12 months",
          },
          {
            tenureMonths: 18,
            interestRateAnnual: 13.0,
            cashback: 3000,
            note: "13% p.a. for 18 months",
          },
        ],
      },
      {
        name: "512GB / Cream",
        sku: "SGS24U-512-CR",
        mrp: 154999,
        price: 144999,
        images: [
          "https://res.cloudinary.com/dxmmbkhq8/image/upload/v1762955154/ChatGPT_Image_Nov_12_2025_05_54_40_PM_vbl1um.png",
        ],
        emiPlans: [
          {
            tenureMonths: 3,
            interestRateAnnual: 0,
            cashback: 0,
            note: "0% interest for 3 months",
          },
          {
            tenureMonths: 6,
            interestRateAnnual: 10.5,
            cashback: 1500,
            note: "10.5% p.a.",
          },
          {
            tenureMonths: 9,
            interestRateAnnual: 11.0,
            cashback: 2000,
            note: "11% p.a. for 9 months",
          },
          {
            tenureMonths: 12,
            interestRateAnnual: 12.5,
            cashback: 2500,
            note: "12.5% p.a. for 12 months",
          },
          {
            tenureMonths: 18,
            interestRateAnnual: 13.0,
            cashback: 3000,
            note: "13% p.a. for 18 months",
          },
        ],
      },
    ],
  },
  {
    name: "OnePlus Ace 3",
    slug: "oneplus-ace-3",
    brand: "OnePlus",
    description:
      "OnePlus Ace 3 – flagship killer with AMOLED display and Snapdragon 8 Gen 2.",
    variants: [
      {
        name: "128GB / Blue",
        sku: "OPA3-128-BL",
        mrp: 44999,
        price: 39999,
        images: [
          "https://res.cloudinary.com/dxmmbkhq8/image/upload/v1762955167/ChatGPT_Image_Nov_12_2025_05_56_28_PM_ys5cwj.png",
        ],
        emiPlans: [
          {
            tenureMonths: 3,
            interestRateAnnual: 0,
            cashback: 0,
            note: "0% interest for 3 months",
          },
          {
            tenureMonths: 6,
            interestRateAnnual: 10.5,
            cashback: 1500,
            note: "10.5% p.a.",
          },
          {
            tenureMonths: 9,
            interestRateAnnual: 11.0,
            cashback: 2000,
            note: "11% p.a. for 9 months",
          },
          {
            tenureMonths: 12,
            interestRateAnnual: 12.5,
            cashback: 2500,
            note: "12.5% p.a. for 12 months",
          },
          {
            tenureMonths: 18,
            interestRateAnnual: 13.0,
            cashback: 3000,
            note: "13% p.a. for 18 months",
          },
          ,
        ],
      },
      {
        name: "256GB / Black",
        sku: "OPA3-256-BK",
        mrp: 49999,
        price: 44999,
        images: [
          "https://res.cloudinary.com/dxmmbkhq8/image/upload/v1762955181/ChatGPT_Image_Nov_12_2025_05_58_18_PM_ea9iyk.png",
        ],
        emiPlans: [
          {
            tenureMonths: 3,
            interestRateAnnual: 0,
            cashback: 0,
            note: "0% interest for 3 months",
          },
          {
            tenureMonths: 6,
            interestRateAnnual: 10.5,
            cashback: 1500,
            note: "10.5% p.a.",
          },
          {
            tenureMonths: 9,
            interestRateAnnual: 11.0,
            cashback: 2000,
            note: "11% p.a. for 9 months",
          },
          {
            tenureMonths: 12,
            interestRateAnnual: 12.5,
            cashback: 2500,
            note: "12.5% p.a. for 12 months",
          },
          {
            tenureMonths: 18,
            interestRateAnnual: 13.0,
            cashback: 3000,
            note: "13% p.a. for 18 months",
          },
        ],
      },
    ],
  },
];

const seed = async () => {
  try {
    const uri = process.env.MONGO_URI || process.env.MONGODB_URI;
    if (!uri) {
      console.error(
        "❌ No MongoDB connection string found. Please set MONGO_URI or MONGODB_URI in your .env"
      );
      process.exit(1);
    }

    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("✅ Connected to MongoDB");
    await Product.deleteMany({});
    await Product.insertMany(products);
    console.log("🌱 Seeded successfully with real images!");
    process.exit(0);
  } catch (err) {
    console.error("❌ Seed error:", err.message || err);
    process.exit(1);
  }
};

seed();
