import { DataTypes } from "sequelize";
import { sequelize } from "./index.js";

const Order = sequelize.define("Order", {
  book_id: DataTypes.INTEGER,
  amount: DataTypes.INTEGER,
  user_id: DataTypes.INTEGER,
});

export default Order;
