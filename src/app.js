import connectDB from "./config/connectDB";
import app from "./config/express";
import env from "./config/vars";

// connect DB
connectDB();

// run server
app.listen(env.port, () => {
  console.log(`Server is running on: http://localhost:${env.port}`);
});
