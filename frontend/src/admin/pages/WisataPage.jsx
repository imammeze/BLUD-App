import React from "react";
import Sidebar from "./../components/sidebar/Sidebar";
import HeaderAdmin from "./../components/header/HeaderAdmin";
import WisataList from "./../components/content/WisataList";

const WisataPage = () => {
  return (
    <div className="bg-gray-100 flex flex-col h-screen">
      <HeaderAdmin />
      <div className="flex flex-1">
        <Sidebar />
        <WisataList />
      </div>
    </div>
  );
};

export default WisataPage;
