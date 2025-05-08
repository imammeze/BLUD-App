import React from "react";
import Sidebar from "./../components/sidebar/Sidebar";
import HeaderAdmin from "./../components/header/HeaderAdmin";
import DashboardContent from "./../components/content/DashboardContent";

const Dashboard = () => {
  return (
    <div className="bg-gray-100 flex flex-col h-screen">
      <HeaderAdmin />
      <div className="flex flex-1">
        <Sidebar />
        <DashboardContent />
      </div>
    </div>
  );
};

export default Dashboard;
