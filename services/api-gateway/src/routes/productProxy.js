import express from "express";
import fetch from "node-fetch";

const router = express.Router();
const PRODUCT_SERVICE = process.env.PRODUCT_SERVICE;

router.use(async (req, res) => {
  const internalPath = req.originalUrl.replace("/api/productos", "");
  const url = `${PRODUCT_SERVICE}/api/productos${internalPath}`;
  console.log("➡ Proxy productos:", url);

  try {
    const response = await fetch(url, {
      method: req.method,
      headers: { "Content-Type": "application/json" },
      body: ["GET", "HEAD"].includes(req.method)
        ? undefined
        : JSON.stringify(req.body)
    });

    const text = await response.text();
    try {
      return res.status(response.status).json(JSON.parse(text));
    } catch {
      return res.status(response.status).send(text);
    }

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
