import { useState } from "react";

const UserList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  // Initial users data
  const [users, setUsers] = useState([
    {
      id: 1,
      userId: "RD11",
      username: "Raisya Diva",
      activateDate: "10/01/2025",
      name: "Raisya Diva Lestari",
      email: "raisyaprat12@gmail.com",
      phone: "+62800785467",
      status: "Waiting",
    },
    {
      id: 2,
      userId: "FD21",
      username: "Fadyana",
      activateDate: "07/01/2025",
      name: "Fadyra Niara",
      email: "dyanara12@gmail.com",
      phone: "+62800785467",
      status: "Verified",
    },
  ]);

  const handleEditClick = (user) => {
    setCurrentUser(user);
    setShowEditModal(true);
  };

  const handleDeleteClick = (user) => {
    setCurrentUser(user);
    setShowDeleteModal(true);
  };

  const handleSaveEdit = () => {
    setUsers(
      users.map((user) => (user.id === currentUser.id ? currentUser : user))
    );
    setShowEditModal(false);
  };

  const handleConfirmDelete = () => {
    setUsers(users.filter((user) => user.id !== currentUser.id));
    setShowDeleteModal(false);
  };

  return (
    <div className="flex-1 flex flex-col">
      <main className="p-6 bg-gray-50 flex-1">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Daftar Pengguna Umum</h3>
          <input
            type="text"
            placeholder="Search..."
            className="border px-4 py-2 rounded-lg w-64"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="bg-white shadow-md rounded-lg p-4">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-blue-300 text-white">
                <th className="p-3">No</th>
                <th className="p-3">UserID</th>
                <th className="p-3">Username Account</th>
                <th className="p-3">Activate Date</th>
                <th className="p-3">Identitas Pengguna</th>
                <th className="p-3">Status</th>
                <th className="p-3">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-b">
                  <td className="p-3 text-center">{user.id}</td>
                  <td className="p-3 text-center">{user.userId}</td>
                  <td className="p-3">{user.username}</td>
                  <td className="p-3 text-center">{user.activateDate}</td>
                  <td className="p-3">
                    <span className="font-semibold">Nama:</span> {user.name}{" "}
                    <br />
                    <span className="font-semibold">Email:</span> {user.email}{" "}
                    <br />
                    <span className="font-semibold">No. Hp:</span> {user.phone}
                  </td>
                  <td className="p-3 text-center">
                    <span
                      className={`${
                        user.status === "Verified"
                          ? "bg-green-400 text-white"
                          : "bg-yellow-300 text-black"
                      } px-3 py-1 rounded-full text-sm`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="p-3 text-center">
                    <div className="flex justify-center space-x-2">
                      <button
                        className="bg-green-500 text-white px-3 py-1 rounded-lg"
                        onClick={() => handleEditClick(user)}>
                        Edit
                      </button>
                      <button
                        className="bg-red-500 text-white px-3 py-1 rounded-lg"
                        onClick={() => handleDeleteClick(user)}>
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
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center">
              <p className="text-lg font-semibold mb-4">
                Anda yakin hapus pengguna?
              </p>
              <div className="flex justify-center space-x-4">
                <button
                  className="bg-gray-400 text-white px-4 py-2 rounded-lg"
                  onClick={() => setShowDeleteModal(false)}>
                  Tidak
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded-lg"
                  onClick={handleConfirmDelete}>
                  Ya
                </button>
              </div>
            </div>
          </div>
        )}

        {showEditModal && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
              <h2 className="text-lg font-semibold mb-4">Edit Data Pengguna</h2>

              <label className="block text-sm font-medium">Nama User</label>
              <input
                type="text"
                className="w-full border rounded-lg px-3 py-2 mb-2"
                value={currentUser.name}
                onChange={(e) =>
                  setCurrentUser({ ...currentUser, name: e.target.value })
                }
              />

              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                className="w-full border rounded-lg px-3 py-2 mb-2"
                value={currentUser.email}
                onChange={(e) =>
                  setCurrentUser({ ...currentUser, email: e.target.value })
                }
              />

              <label className="block text-sm font-medium">No Telepon</label>
              <input
                type="text"
                className="w-full border rounded-lg px-3 py-2 mb-4"
                value={currentUser.phone}
                onChange={(e) =>
                  setCurrentUser({ ...currentUser, phone: e.target.value })
                }
              />

              <div className="flex justify-end space-x-2">
                <button
                  className="bg-gray-400 text-white px-4 py-2 rounded-lg"
                  onClick={() => setShowEditModal(false)}>
                  Batal
                </button>
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                  onClick={handleSaveEdit}>
                  Simpan
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default UserList;
