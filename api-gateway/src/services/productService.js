import axios from "axios";
import config from "../config.js";

export const productService = axios.create({
    baseURL: config.PRODUCT_SERVICE_URL
});
