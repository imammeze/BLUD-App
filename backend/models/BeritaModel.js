import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Berita = db.define(
  "berita",
  {
    judul: DataTypes.STRING,
    isi: DataTypes.TEXT,
    gambar: DataTypes.STRING,
    tanggal: DataTypes.DATE,
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

export default Berita;

(async () => {
  await db.sync();
})();
