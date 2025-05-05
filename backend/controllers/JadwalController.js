import Jadwal from "../models/JadwalModel";

export const getJadwal = async (req, res) => {
  try {
    const response = await Jadwal.findAll();
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getJadwalById = async (req, res) => {
  try {
    const response = await Jadwal.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const createJadwal = (req, res) => {
  const { name, name_event, tanggal } = req.body;

  const tanggalObjek = new Date(tanggal);
  if (isNaN(tanggalObjek)) {
    return res.status(400).json({ msg: "Format tanggal tidak valid" });
  }

  try {
    Jadwal.create({
      name,
      name_event,
      tanggal: tanggalObjek,
    });
    res.status(201).json({ msg: "Jadwal berhasil dibuat" });
  } catch (error) {
    console.error("Error createJadwal:", error.message);
    res.status(500).json({ msg: "Gagal menyimpan Jadwal" });
  }
};

export const updateJadwal = (req, res) => {};

export const deleteJadwal = (req, res) => {};
