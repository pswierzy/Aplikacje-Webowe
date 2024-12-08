import { DataTypes } from "sequelize";
import { sequelize } from "./index.js";

const Book = sequelize.define("Book", {
  title: DataTypes.STRING,
  author: DataTypes.STRING,
  year: DataTypes.INTEGER,
});

export default Book;
