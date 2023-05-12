import express from "express";
import {
  getCategories,
  getSubCategories,
} from "../controllers/categoryController.js";

const router = express.Router();

router.get("/getall", getCategories);
router.post("/getallsub", getSubCategories);

export default router;
