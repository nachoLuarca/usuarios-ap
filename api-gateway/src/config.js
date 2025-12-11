import dotenv from "dotenv";
dotenv.config();

export default {
  PORT: process.env.PORT || 4000,
  AUTH_SERVICE_URL: process.env.AUTH_SERVICE_URL,
  PRODUCT_SERVICE_URL: process.env.PRODUCT_SERVICE_URL,
  JWT_SECRET: process.env.JWT_SECRET
};
