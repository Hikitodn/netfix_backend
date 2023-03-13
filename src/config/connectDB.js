import mongoose from "mongoose";
import env from "./vars";

// mongoDB atlas URI
const uri = env.mongo.uri;

const connectDB = async () => {
  try {
    await mongoose.connect(uri, {
      keepAlive: true,
    });
    console.log("Database connected!");
  } catch (error) {
    console.log(error);
    process.exit(-1);
  }
};

export default connectDB;
