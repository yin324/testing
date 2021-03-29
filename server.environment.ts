import * as dotenv from "dotenv";

dotenv.config();

export const ServerEnvironment = {
  MONGODB_CONNECTION: process.env.MONGODB_URL,
  JWT_SECRETKEY: process.env.JWT_SECRETKEY
};

