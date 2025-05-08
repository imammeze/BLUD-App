import Wisata from "../models/WisataModel.js";
import path from "path";
import fs from "fs";

export const getWisata = async (req, res) => {
  try {
    const response = await Wisata.findAll();
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getWisataById = async (req, res) => {
  try {
    const response = await Wisata.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const createWisata = (req, res) => {
  if (!req.files || !req.files.file) {
    return res.status(400).json({ msg: "Tidak ada file yang diunggah" });
  }

  const { nama, deskripsi, harga_tiket, jam_operasional, alamat, gambar } =
    req.body;
  const file = req.files.file;
  const ext = path.extname(file.name).toLowerCase();
  const allowedType = [".png", ".jpg", ".jpeg"];
  const fileSize = file.data.length;
  const fileName = file.md5 + ext;

  if (!allowedType.includes(ext)) {
    return res.status(422).json({ msg: "Format gambar tidak valid" });
  }

  if (fileSize > 5 * 1024 * 1024) {
    return res.status(422).json({ msg: "Ukuran gambar maks 5 MB" });
  }

  const imagePath = `./public/images/${fileName}`;
  file.mv(imagePath, async (err) => {
    if (err) return res.status(500).json({ msg: err.message });

    try {
      await Wisata.create({
        nama,
        deskripsi,
        harga_tiket,
        jam_operasional,
        alamat,
        gambar: fileName,
      });
      res.status(201).json({ msg: "Data Wisata berhasil dibuat" });
    } catch (error) {
      console.error("Error createWisata:", error.message);
      res.status(500).json({ msg: "Gagal menyimpan data Wisata" });
    }
  });
};

export const updateWisata = async (req, res) => {
  const { nama, deskripsi, harga_tiket, jam_operasional, alamat, gambar } =
    req.body;

  const Wisata = await Wisata.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!Wisata) return res.status(404).json({ msg: "Data tidak ditemukan" });

  try {
    Wisata.update(
      {
        nama,
        deskripsi,
        harga_tiket,
        jam_operasional,
        alamat,
        gambar,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(201).json({ msg: "Wisata berhasil diubah" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: "Gagal mengubah Wisata" });
  }
};

export const deleteWisata = async (req, res) => {
  const wisata = await Wisata.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!wisata) return res.status(404).json({ msg: "Data tidak ditemukan" });

  try {
    await Wisata.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Data Wisata berhasil dihapus" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: "Gagal menghapus data Wisata" });
  }
};
