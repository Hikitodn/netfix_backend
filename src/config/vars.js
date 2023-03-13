import * as dotenv from "dotenv";
import path from "path";

dotenv.config({
  path: path.join(__dirname, "../../.env"),
});

const env = {
  port: process.env.PORT,
  mongo: {
    uri: process.env.MONGO_URI,
  },
};

export default env;
