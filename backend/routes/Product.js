import express from "express";
import Product from "../models/Product.js";

const router = express.Router();

/**
 * Helper function to compute monthly EMI
 * @param {number} P - principal amount
 * @param {number} rAnnual - annual interest rate (%)
 * @param {number} n - number of months
 */
const computeMonthlyEMI = (P, rAnnual, n) => {
  if (!rAnnual || rAnnual === 0) {
    return +(P / n).toFixed(2);
  }
  const r = rAnnual / 12 / 100;
  const numerator = P * r * Math.pow(1 + r, n);
  const denominator = Math.pow(1 + r, n) - 1;
  return +(numerator / denominator).toFixed(2);
};

// GET all products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find({});

    const enriched = products.map((p) => {
      const pObj = p.toObject();
      pObj.variants = pObj.variants.map((v) => {
        v.emiPlans = v.emiPlans.map((plan) => ({
          ...plan,
          monthlyPayment: computeMonthlyEMI(
            v.price - (plan.cashback || 0),
            plan.interestRateAnnual,
            plan.tenureMonths
          ),
        }));
        return v;
      });
      return pObj;
    });

    res.json(enriched);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

// GET single product by slug
router.get("/:slug", async (req, res) => {
  try {
    const { slug } = req.params;
    const product = await Product.findOne({ slug });

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    const pObj = product.toObject();
    pObj.variants = pObj.variants.map((v) => {
      v.emiPlans = v.emiPlans.map((plan) => ({
        ...plan,
        monthlyPayment: computeMonthlyEMI(
          v.price - (plan.cashback || 0),
          plan.interestRateAnnual,
          plan.tenureMonths
        ),
      }));
      return v;
    });

    res.json(pObj);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

export default router;
