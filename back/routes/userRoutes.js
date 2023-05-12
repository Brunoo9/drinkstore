import express from "express";
import {
  getAllUsers,
  getAdminUsers,
  createUser,
  updateUser,
  authUser,
  userProfile,
  deleteUser,
} from "../controllers/userController.js";
import checkAuth from "../middlewares/checkAuth.js";

const router = express.Router();

router.get("/getall", getAllUsers);
router.get("/getadmins", getAdminUsers);
router.post("/create", createUser);
router.post("/login", authUser);
router.put("/update/:id", updateUser);
router.put("/delete/:id", deleteUser);

router.get("/profile", checkAuth, userProfile);
export default router;
