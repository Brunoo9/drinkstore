import express from "express";
import { getAllClients } from "../controllers/clientController.js";

const router = express.Router();

router.get("/getall", getAllClients);
// router.get('/getall')
// router.get('/getall')
// router.get('/getall')

export default router;
