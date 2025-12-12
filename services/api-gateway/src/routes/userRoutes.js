import express from "express";
import fetch from "node-fetch";

const router = express.Router();
const USERS_SERVICE = process.env.USERS_SERVICE;

router.use(async (req, res) => {
  try {
    const internalPath = req.originalUrl.replace("/api/usuarios", "");
    const url = `${USERS_SERVICE}/api/usuarios${internalPath}`;

    // Clonamos los headers manualmente
    const forwardedHeaders = {};
    for (const [key, value] of Object.entries(req.headers)) {
      forwardedHeaders[key.toLowerCase()] = value; 
    }

    // IMPORTANTÍSIMO: eliminar el content-length
    delete forwardedHeaders["content-length"];

    const response = await fetch(url, {
      method: req.method,
      headers: forwardedHeaders,
      body: ["GET", "HEAD"].includes(req.method) ? undefined : JSON.stringify(req.body)
    });

    // Parseo flexible
    const text = await response.text();
    try {
      res.status(response.status).json(JSON.parse(text));
    } catch {
      res.status(response.status).send(text);
    }

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
