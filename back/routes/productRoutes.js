import express from "express";
import {
  getAllProducts,
  getOneProduct,
  getProductsbyCategory,
  getProductsbySubCategory,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";
import { uploadAvatar } from "../middlewares/multer.js";
const router = express.Router();

router.get("/getall", getAllProducts);
router.get("/getone/:id", getOneProduct);
router.get("/getbycat/:id", getProductsbyCategory);
router.get("/getbysub/:id", getProductsbySubCategory);
router.post("/create", uploadAvatar.single("img"), createProduct);
router.put("/update/:id", uploadAvatar.single("img"), updateProduct);
router.delete("/delete/:id", deleteProduct);

export default router;
