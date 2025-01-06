import express from "express";
import Book from "../models/book.js";
//import authenticate from "../middleware/authenticate.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const books = await Book.findAll();
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: "Failed to get books!" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const book = await Book.findOne({ where: { id } });
    res.json(book);
  } catch (err) {
    res.status(500).json({ error: "Couldn't find this book!" });
  }
});

router.post(
  "/",
  /*authenticate,*/ async (req, res) => {
    try {
      const { title, author, year } = req.body;
      const book = await Book.create({ title, author, year });
      res.json(book);
    } catch (err) {
      res.status(400).json({ error: "Bad data given!" });
    }
  }
);

router.delete(
  "/:id",
  /*authenticate,*/ async (req, res) => {
    try {
      const id = req.params.id;
      await Book.destroy({ where: { id } });
      res.json({ message: "Book deleted" });
    } catch (err) {
      res.status(500).json({ error: "Couldn't delete the book!" });
    }
  }
);

export default router;
