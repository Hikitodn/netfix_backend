import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://Hikito:n4UMqjy1lz6Dw4jz@netfix.0th5xg3.mongodb.net/?retryWrites=true&w=majority"
);
export const db = mongoose.connection;
