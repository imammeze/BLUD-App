import express from "express";
import FileUpload from "express-fileupload";
import cors from "cors";
import BeritaRoute from "./routes/BeritaRoute.js";
import JadwalRoute from "./routes/JadwalRoute.js";
import WisataRoute from "./routes/WisataRoute.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(FileUpload());
app.use(express.static("public"));
app.use(BeritaRoute);
app.use(JadwalRoute);
app.use(WisataRoute);

app.listen(5000, () => console.log("Server started on port 5000"));
