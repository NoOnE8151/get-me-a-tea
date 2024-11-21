import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    let uri = process.env.MONGO_URI;
    await mongoose.connect(uri, {
        dbName: "getMeATea",
    });
    console.log("MongoDB connected successfully!");
  } catch (error) {
    console.log("error:", error);
  }
}
