import { useState } from "react";
import AdminList from "./../components/content/AdminList";
import HeaderAdmin from "./../components/header/HeaderAdmin";
import Sidebar from "./../components/sidebar/Sidebar";
import FooterAdmin from "./../components/footer/FooterAdmin";

const AdminPage = () => {
  const [admins, setAdmins] = useState([
    {
      id: "AD11",
      username: "Admin Rina",
      activateDate: "10/01/2025",
      name: "Raisya Diva Lestari",
      email: "raisyaprat12@gmail.com",
      phone: "+62800785467",
      status: "Waiting",
    },
    {
      id: "AD22",
      username: "Admin Adam",
      activateDate: "07/01/2025",
      name: "Adam Firmansyah",
      email: "firmanadam@gmail.com",
      phone: "+62800785467",
      status: "Waiting",
    },
    {
      id: "AD23",
      username: "Admin Karsa",
      activateDate: "07/01/2025",
      name: "Karsa Bahrudin",
      email: "karsabahar@gmail.com",
      phone: "+62800785467",
      status: "Waiting",
    },
  ]);

  const handleUpdateAdmin = (id, updatedData) => {
    setAdmins(
      admins.map((admin) =>
        admin.id === id ? { ...admin, ...updatedData } : admin
      )
    );
  };

  const handleDeleteAdmin = (id) => {
    setAdmins(admins.filter((admin) => admin.id !== id));
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <HeaderAdmin />
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <AdminList
            admins={admins}
            onUpdateAdmin={handleUpdateAdmin}
            onDeleteAdmin={handleDeleteAdmin}
          />
          <FooterAdmin />
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
