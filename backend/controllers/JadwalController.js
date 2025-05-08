import Jadwal from "../models/JadwalModel.js";

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

export const updateJadwal = async (req, res) => {
  const { name, name_event, tanggal } = req.body;
  const tanggalObjek = new Date(tanggal);

  const jadwal = await Jadwal.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!jadwal) return res.status(404).json({ msg: "Data tidak ditemukan" });

  if (isNaN(tanggalObjek)) {
    return res.status(400).json({ msg: "Format tanggal tidak valid" });
  }

  try {
    Jadwal.update(
      {
        name,
        name_event,
        tanggal: tanggalObjek,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(201).json({ msg: "Jadwal berhasil diubah" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: "Gagal mengubah jadwal" });
  }
};

export const deleteJadwal = async (req, res) => {
  const jadwal = await Jadwal.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!jadwal) return res.status(404).json({ msg: "Data tidak ditemukan" });

  try {
    await Jadwal.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Jadwal berhasil dihapus" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: "Gagal menghapus Jadwal" });
  }
};
