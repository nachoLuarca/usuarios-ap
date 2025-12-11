import axios from "axios";
import config from "../config.js";

export const authService = axios.create({
    baseURL: config.AUTH_SERVICE_URL
});
