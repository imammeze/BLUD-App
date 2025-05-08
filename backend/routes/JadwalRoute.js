import express from "express";
import {
  getJadwal,
  getJadwalById,
  createJadwal,
  updateJadwal,
  deleteJadwal,
} from "../controllers/JadwalController.js";

const router = express.Router();

router.get("/jadwal", getJadwal);
router.get("/jadwal/:id", getJadwalById);
router.post("/jadwal", createJadwal);
router.patch("/jadwal/:id", updateJadwal);
router.delete("/jadwal/:id", deleteJadwal);

export default router;
