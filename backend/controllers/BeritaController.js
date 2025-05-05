import { where } from "sequelize";
import Berita from "../models/BeritaModel.js";
import path from "path";

export const getBerita = async (req, res) => {
  try {
    const response = await Berita.findAll();
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getBeritaById = async (req, res) => {
  try {
    const response = await Berita.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const createBerita = (req, res) => {
  if (!req.files || !req.files.file) {
    return res.status(400).json({ msg: "Tidak ada file yang diunggah" });
  }

  const { judul, isi, tanggal } = req.body;
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

  const tanggalObjek = new Date(tanggal);
  if (isNaN(tanggalObjek)) {
    return res.status(400).json({ msg: "Format tanggal tidak valid" });
  }

  const imagePath = `./public/images/${fileName}`;
  file.mv(imagePath, async (err) => {
    if (err) return res.status(500).json({ msg: err.message });

    try {
      await Berita.create({
        judul,
        isi,
        gambar: fileName,
        tanggal: tanggalObjek,
      });
      res.status(201).json({ msg: "Berita berhasil dibuat" });
    } catch (error) {
      console.error("Error createBerita:", error.message);
      res.status(500).json({ msg: "Gagal menyimpan berita" });
    }
  });
};

export const updateBerita = async (req, res) => {
  const berita = await Berita.findOne({
    where: {
      id: req.params.id,
    },
  });

  if (!berita) return res.status(404).json({ msg: "Data tidak ditemukan" });

  let fileName = "";
  if (req.files === null) {
    fileName = berita.gambar;
  } else {
    const file = req.files.file;
    const fileSize = file.data.length;
    const ext = path.extname(file.name).toLowerCase();
    const fileName = file.md5 + ext;
    const allowedType = [".png", ".jpg", ".jpeg"];

    if (!allowedType.includes(ext)) {
      return res.status(422).json({ msg: "Format gambar tidak valid" });
    }

    if (fileSize > 5 * 1024 * 1024) {
      return res.status(422).json({ msg: "Ukuran gambar maks 5 MB" });
    }

    const filepath = `./public/images/${berita.gambar}`;
    fs.unlinkSync(filepath);

    const imagePath = `./public/images/${fileName}`;
    file.mv(imagePath, (err) => {
      if (err) return res.status(500).json({ msg: err.message });
    });
  }

  const tanggalObjek = new Date(tanggal);
  const { judul, isi, tanggal } = req.body;
  try {
    await Berita.update({
      judul: judul,
      isi: isi,
      gambar: fileName,
      tanggal: tanggalObjek,
    }),
      {
        where: {
          id: req.params.id,
        },
      };
    res.status(200).json({ msg: "Berita berhasil diupdate" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteBerita = async (req, res) => {
  const berita = await Berita.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!berita) return res.status(404).json({ msg: "Data tidak ditemukan" });

  try {
    const filepath = `./public/images/${berita.gambar}`;
    fs.unlinkSync(filepath);
    await Berita.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Berita berhasil dihapus" });
  } catch (error) {
    console.error(error.message);
  }
};
