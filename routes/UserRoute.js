import express from "express";
import { logMethod } from "../middlewares/index.js";

const router = express.Router();

router.use((req, res, next) => {
  logMethod(req, res, next);
});

router.get("/", (req, res) => {
  return res.status(200).send("OK");
});

export default router;
