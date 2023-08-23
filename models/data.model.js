import mongoose from "mongoose";
const leaveAt = new Date(Date.now()).toISOString();

const dataSchema = new mongoose.Schema(
  {
    data: {
      type: Object,
    },
  },
  { timestamps: true }
);

const DataModel = new mongoose.model("data", dataSchema);
export default DataModel;
