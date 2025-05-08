import React, { useState } from "react";
import DeleteModal from "../modal/DeleteModalAdmin";

function AdminList({ admins, onUpdateAdmin, onDeleteAdmin }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [currentAdmin, setCurrentAdmin] = useState(null);

  const handleEdit = (admin) => {
    setCurrentAdmin(admin);
    setShowEditModal(true);
  };

  const handleDelete = (admin) => {
    setCurrentAdmin(admin);
    setShowDeleteModal(true);
  };

  const handleSaveEdit = (updatedData) => {
    onUpdateAdmin(currentAdmin.id, updatedData);
    setShowEditModal(false);
  };

  const handleConfirmDelete = () => {
    onDeleteAdmin(currentAdmin.id);
    setShowDeleteModal(false);
  };

  const filteredAdmins = admins.filter(
    (admin) =>
      admin.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      admin.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
      admin.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="p-6 bg-gray-50 flex-1">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Daftar Pengguna Admin</h3>
        <input
          type="text"
          placeholder="Search..."
          className="border px-4 py-2 rounded-lg w-64"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="bg-white shadow-md rounded-lg p-4">
        <div className="mb-4 text-right">
          <a
            href="tambahadmin.html"
            className="bg-blue-400 hover:bg-blue-500 text-white px-4 py-2 rounded-lg">
            Tambahkan Admin
          </a>
        </div>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-blue-300 text-white">
              <th className="p-3">No</th>
              <th className="p-3">AdminID</th>
              <th className="p-3">Username Admin</th>
              <th className="p-3">Activate Date</th>
              <th className="p-3">Identitas Pengguna</th>
              <th className="p-3">Status</th>
              <th className="p-3">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {filteredAdmins.map((admin, index) => (
              <tr key={admin.id} className="border-b">
                <td className="p-3 text-center">{index + 1}</td>
                <td className="p-3 text-center">{admin.id}</td>
                <td className="p-3">{admin.username}</td>
                <td className="p-3 text-center">{admin.activateDate}</td>
                <td className="p-3">
                  <span className="font-semibold">Nama:</span> {admin.name}{" "}
                  <br />
                  <span className="font-semibold">Email:</span> {admin.email}{" "}
                  <br />
                  <span className="font-semibold">No. Hp:</span> {admin.phone}
                </td>
                <td className="p-3 text-center">
                  <span className="bg-yellow-300 text-black px-3 py-1 rounded-full text-sm">
                    {admin.status}
                  </span>
                </td>
                <td className="p-3 text-center">
                  <div className="flex justify-center space-x-2">
                    <button
                      className="bg-green-500 text-white px-3 py-1 rounded-lg"
                      onClick={() => handleEdit(admin)}>
                      Edit
                    </button>
                    <button
                      className="bg-red-500 text-white px-3 py-1 rounded-lg"
                      onClick={() => handleDelete(admin)}>
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showDeleteModal && (
        <DeleteModal
          onConfirm={handleConfirmDelete}
          onCancel={() => setShowDeleteModal(false)}
        />
      )}
    </main>
  );
}

export default AdminList;
