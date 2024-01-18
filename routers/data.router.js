import express from "express";
import { createData, getData } from "../controllers/data.controller.js";

const router = express.Router();

router.route("/create").post(createData);
router.route("/").get(getData);

export default router;
