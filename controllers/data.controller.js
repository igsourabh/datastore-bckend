import DataModel from "../models/data.model.js";

import dotenv from "dotenv";

dotenv.config();

export const createData = async (req, res) => {
  try {
    const data = await DataModel.create({ data: req.body });
    res.status(201).json({
      success: true,
      data: data,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
