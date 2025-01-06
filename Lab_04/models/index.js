import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./database.db",
});

export { sequelize };

const syncDb = async () => {
  await sequelize.sync({ force: true });
  console.log("Database synchronized");
};

export { syncDb };
