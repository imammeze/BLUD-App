import React from "react";

function DeleteModalAdmin({ onConfirm, onCancel }) {
  return (
    <div className="fixed inset-0 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center">
        <p className="text-lg font-semibold mb-4">Anda yakin hapus pengguna?</p>
        <div className="flex justify-center space-x-4">
          <button
            className="bg-gray-400 text-white px-4 py-2 rounded-lg"
            onClick={onCancel}>
            Tidak
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-lg"
            onClick={onConfirm}>
            Ya
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModalAdmin;
