import React from "react";
import Sidebar from "./../components/sidebar/Sidebar";
import HeaderAdmin from "./../components/header/HeaderAdmin";
import UserList from "./../components/content/UserList";

const UserPage = () => {
  return (
    <div className="bg-gray-100 flex flex-col h-screen">
      <HeaderAdmin />
      <div className="flex flex-1">
        <Sidebar />
        <UserList />
      </div>
    </div>
  );
};

export default UserPage;
