import { syncDb } from "./models/index.js";
try {
  await syncDb();
} catch (err) {
  console.error("Failed to synchronize database: ", err);
  process.exit(1);
}

import express from "express";
import router_books from "./routes/books.js";
import router_users from "./routes/users.js";
import router_orders from "./routes/orders.js";

const app = express();

app.use(express.json());
app.use("/api/books", router_books);
app.use("/api", router_users);
app.use("/api/orders", router_orders);

app.listen(3000, () => {
  console.log("Server works");
});
