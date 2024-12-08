import express from "express";
import User from "../models/user.js";
import jwt from "jsonwebtoken";

const router = express.Router();
const secretKey = "your_secret";

router.post("/register", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.create({ email, password });
    //res.json({ id: user.id });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: "Failed to register!" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });

    if (!user) return res.status(404).json({ error: "Didn't find this user" });

    if (!password == user.password) {
      return res.status(401).json({ message: "Invalid password" });
    }
    res.json(user.id);
    /*const token = jwt.sign({ user }, secretKey, { expiresIn: "1h" });

    res.json({ token });*/
  } catch {
    res.status(500).json({ error: "Error while loging in!" });
  }
});

export default router;
