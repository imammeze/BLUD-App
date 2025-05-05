import Wisata from "../models/WisataModel";

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
  const { nama, deskripsi, harga_tiket, jam_operasional, lokasi, gambar } =
    req.body;

  try {
    Wisata.create({
      nama,
      deskripsi,
      harga_tiket,
      jam_operasional,
      lokasi,
      gambar,
    });
    res.status(201).json({ msg: "Wisata berhasil dibuat" });
  } catch (error) {
    console.error("Error createWisata:", error.message);
    res.status(500).json({ msg: "Gagal menyimpan Wisata" });
  }
};

export const updateWisata = (req, res) => {};

export const deleteWisata = (req, res) => {};
