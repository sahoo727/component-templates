import express from "express";
import { postName } from "../controllers/LocationController.js";

const router = express.Router();

router.post("/", postName);

export default router;
