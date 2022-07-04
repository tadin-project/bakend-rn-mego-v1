import express from "express";

const router = express.Router();

router.get("/register", (req, res) => {
  return res.status(200).send("Register");
});

router.get("/login", (req, res) => {
  return res.status(200).send("Login");
});

export default router;
