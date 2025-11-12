import mongoose from "mongoose";

const EMIPlanSchema = new mongoose.Schema({
  tenureMonths: Number,
  interestRateAnnual: Number,
  cashback: { type: Number, default: 0 },
  note: { type: String, default: "" },
});

const VariantSchema = new mongoose.Schema({
  name: String,
  sku: String,
  mrp: Number,
  price: Number,
  images: [String],
  emiPlans: [EMIPlanSchema],
});

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  brand: String,
  description: String,
  variants: [VariantSchema],
  createdAt: { type: Date, default: Date.now },
});

const Product = mongoose.model("Product", ProductSchema);

export default Product;
