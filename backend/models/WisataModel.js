import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Wisata = db.define(
  "wisata",
  {
    nama: DataTypes.STRING,
    deskripsi: DataTypes.STRING,
    harga_tiket: DataTypes.STRING,
    jam_operasional: DataTypes.STRING,
    alamat: DataTypes.STRING,
    gambar: DataTypes.STRING,
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

export default Wisata;

(async () => {
  await db.sync();
})();
