import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./admin/pages/Dashboard";
import AdminPage from "./admin/pages/AdminPage";
import UserPage from "./admin/pages/UserPage";
import JadwalPage from "./admin/pages/JadwalPage";
import BeritaPage from "./admin/pages/BeritaPage";
import "./index.css";
import WisataPage from "./admin/pages/WisataPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/admin",
    element: <AdminPage />,
  },
  {
    path: "/pengguna",
    element: <UserPage />,
  },
  {
    path: "/jadwal",
    element: <JadwalPage />,
  },
  {
    path: "/berita",
    element: <BeritaPage />,
  },
  {
    path: "/berita",
    element: <BeritaPage />,
  },
  {
    path: "/wisata",
    element: <WisataPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
