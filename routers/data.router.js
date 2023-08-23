import express from "express";
import { createData } from "../controllers/data.controller.js";

const router = express.Router();

router.route("/create").post(createData);

export default router;
