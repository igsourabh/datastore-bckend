import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const MONGO_URI = process.env.DATABASE_PROD_URI;
const MONGO_URI_STAGING = process.env.DATABASE_URI;
console.log(MONGO_URI)
mongoose.set("strictQuery", false);
export const connectDB = async () => {
  const conn = await mongoose.connect(
    MONGO_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
  console.log(`mongo db connected ${conn.connection.host}`);
};
