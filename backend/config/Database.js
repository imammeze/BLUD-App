import { Sequelize } from "sequelize";

const db = new Sequelize("blud_app", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
