import React from "react";
import Sidebar from "./../components/sidebar/Sidebar";
import HeaderAdmin from "./../components/header/HeaderAdmin";
import JadwalList from "./../components/content/JadwalList";

const JadwalPage = () => {
  return (
    <div className="bg-gray-100 flex flex-col h-screen">
      <HeaderAdmin />
      <div className="flex flex-1">
        <Sidebar />
        <JadwalList />
      </div>
    </div>
  );
};

export default JadwalPage;
