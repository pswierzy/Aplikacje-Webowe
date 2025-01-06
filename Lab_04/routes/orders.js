import express from "express";
import Order from "../models/order.js";
import Book from "../models/book.js";

const router = express.Router();

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const books = await Order.findAll({ where: { id: id } });
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: "Couldn't find orders for this user!" });
  }
});

router.post("/", async (req, res) => {
  try {
    const { book_id, amount, user_id } = req.body;

    if (!(await Book.findOne({ where: { id: book_id } })))
      res.status(404).json({ error: "Couldn't find this book" });
    else {
      const order = await Order.create({ book_id, amount, user_id });
      res.status(201).json(order);
    }
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: "Bad data given!" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    await Order.destroy({ where: { id } });
    res.json({ message: "Order deleted" });
  } catch (err) {
    res.status(500).json({ error: "Couldn't delete this order!" });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const orderId = req.params.id;
    const { amount } = req.body;

    const order = await Order.findOne({ where: { id: orderId } });

    if (!order) {
      return res.status(404).json({ error: "Order not found!" });
    }
    if (amount !== undefined) {
      order.amount = amount;
    }
    await order.save();

    res.json({ message: "Order updated successfully!", order });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ error: "An error occurred while updating the order." });
  }
});

export default router;
