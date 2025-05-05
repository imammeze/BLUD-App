import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Jadwal = db.define(
  "jadwal",
  {
    name: DataTypes.STRING,
    name_event: DataTypes.STRING,
    tanggal: DataTypes.DATE,
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

export default Jadwal;

(async () => {
  await db.sync();
})();
