import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FooterAdmin from "./../footer/FooterAdmin";
import axios from "axios";

const BeritaList = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const [beritas, setBerita] = useState([]);

  // useEffect(() => {
  //   getBerita();
  // });

  // const getBerita = async () => {
  //   const response = await axios.get("http://localhost:5000/berita");
  //   setBerita(response.data);
  // };

  // Handle delete berita
  const handleDelete = (id) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus berita ini?")) {
      // Di aplikasi nyata, ini akan mengirim request ke API untuk menghapus data
      console.log(`Berita dengan ID ${id} telah dihapus`);
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-1">
        <div className="flex-1 flex flex-col">
          <main className="p-6 bg-gray-50 flex-1">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">List Berita</h3>
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
                <Link
                  to="/tambahberita"
                  className="bg-blue-400 hover:bg-blue-500 text-white px-4 py-2 rounded-lg">
                  Tambahkan Data Berita
                </Link>
              </div>
              {beritas.map((berita, index) => (
                <table className="w-full border-collapse" key={berita.id}>
                  <thead>
                    <tr className="bg-blue-300 text-white">
                      <th className="p-3">No</th>
                      <th className="p-3">Gambar</th>
                      <th className="p-3">Judul Berita</th>
                      <th className="p-3">Tanggal</th>
                      <th className="p-3">Isi Berita</th>
                      <th className="p-3">Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-3 text-center">{index + 1}</td>
                      <td className="p-3 text-left">
                        <img
                          className="w-[100px] h-[100px]"
                          src={berita.gambar}
                        />
                      </td>
                      <td className="p-3">{berita.judul}</td>
                      <td className="p-3 text-center">{berita.tanggal}</td>
                      <td className="p-3">{berita.isi}</td>
                      <td className="p-3 text-center flex">
                        <Link
                          to={`/editberita/${berita.id}`}
                          className="inline-block bg-green-500 hover:bg-green-600 p-2 rounded-lg mr-2">
                          Edit
                        </Link>
                        <button
                          onClick={() => handleDelete(berita.id)}
                          className="inline-block bg-red-500 hover:bg-red-600 p-2 rounded-lg">
                          Delete
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              ))}
            </div>
          </main>

          <FooterAdmin />
        </div>
      </div>
    </div>
  );
};

export default BeritaList;
