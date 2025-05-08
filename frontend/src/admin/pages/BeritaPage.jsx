import React from "react";
import Sidebar from "./../components/sidebar/Sidebar";
import HeaderAdmin from "./../components/header/HeaderAdmin";
import BeritaList from "./../components/content/BeritaList";

const BeritaPage = () => {
  return (
    <div className="bg-gray-100 flex flex-col h-screen">
      <HeaderAdmin />
      <div className="flex flex-1">
        <Sidebar />
        <BeritaList />
      </div>
    </div>
  );
};

export default BeritaPage;
