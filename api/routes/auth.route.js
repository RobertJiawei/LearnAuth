import express from "express";
import { test } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", test);

export default router;
