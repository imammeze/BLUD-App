import React, { useState } from "react";
import { Link } from "react-router-dom";
import FooterAdmin from "./../footer/FooterAdmin";

const WisataList = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Data tempat wisata (dalam aplikasi nyata ini akan diambil dari API/database)
  const [wisataList, setWisataList] = useState([
    {
      id: 1,
      nama: "Menara Teratai",
      deskripsi:
        "Menara Pandang Teratai Purwokerto merupakan sebuah menara yang berada di Kedungwuluh, Purwokerto Barat, Kabupaten Banyumas.",
      hargaTiket: "RP 20.000",
      jamOperasional: "09.00 - 16.00",
      lokasi: "Purwokerto, Kabupaten Banyumas",
      foto: "img/Picture.png",
    },
    {
      id: 2,
      nama: "Menara Teratai",
      deskripsi:
        "Menara Pandang Teratai Purwokerto merupakan sebuah menara yang berada di Kedungwuluh, Purwokerto Barat, Kabupaten Banyumas.",
      hargaTiket: "RP 20.000",
      jamOperasional: "09.00 - 16.00",
      lokasi: "Purwokerto, Kabupaten Banyumas",
      foto: "img/Picture.png",
    },
    {
      id: 3,
      nama: "Menara Teratai",
      deskripsi:
        "Menara Pandang Teratai Purwokerto merupakan sebuah menara yang berada di Kedungwuluh, Purwokerto Barat, Kabupaten Banyumas.",
      hargaTiket: "RP 20.000",
      jamOperasional: "09.00 - 16.00",
      lokasi: "Purwokerto, Kabupaten Banyumas",
      foto: "img/Picture.png",
    },
  ]);

  // Handle delete tempat wisata
  const handleDelete = (id) => {
    if (
      window.confirm("Apakah Anda yakin ingin menghapus tempat wisata ini?")
    ) {
      // Di aplikasi nyata, ini akan mengirim request ke API untuk menghapus data
      console.log(`Tempat wisata dengan ID ${id} telah dihapus`);
      setWisataList(wisataList.filter((item) => item.id !== id));
    }
  };

  // Filter tempat wisata berdasarkan pencarian
  const filteredWisata = wisataList.filter(
    (wisata) =>
      wisata.nama.toLowerCase().includes(searchQuery.toLowerCase()) ||
      wisata.deskripsi.toLowerCase().includes(searchQuery.toLowerCase()) ||
      wisata.lokasi.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-1 overflow-hidden">
        <div className="flex-1 flex flex-col overflow-hidden">
          <main className="p-6 bg-gray-50 flex-1 overflow-hidden">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">List Tempat Wisata</h3>
              <input
                type="text"
                placeholder="Search..."
                className="border px-4 py-2 rounded-lg w-64"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="bg-white shadow-md rounded-lg p-4 overflow-hidden">
              <div className="mb-4 text-right">
                <Link
                  to="/tambahwisata"
                  className="bg-blue-400 hover:bg-blue-500 text-white px-4 py-2 rounded-lg">
                  Tambahkan Data Wisata
                </Link>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse min-w-[1000px]">
                  <thead>
                    <tr className="bg-blue-300 text-white">
                      <th className="p-3">No</th>
                      <th className="p-3">Nama Tempat Wisata</th>
                      <th className="p-3">Deskripsi Wisata</th>
                      <th className="p-3">Harga Tiket</th>
                      <th className="p-3">Jam Operasional</th>
                      <th className="p-3">Lokasi</th>
                      <th className="p-3">Foto</th>
                      <th className="p-3">Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredWisata.map((wisata, index) => (
                      <tr key={wisata.id} className="border-b">
                        <td className="p-3 text-center">{index + 1}</td>
                        <td className="p-3 text-center">{wisata.nama}</td>
                        <td className="p-3 text-center">{wisata.deskripsi}</td>
                        <td className="p-3 text-center">{wisata.hargaTiket}</td>
                        <td className="p-3 text-center">
                          {wisata.jamOperasional}
                        </td>
                        <td className="p-3 text-center">{wisata.lokasi}</td>
                        <td className="p-3 text-left">
                          <a
                            href="#"
                            className="flex items-center text-blue-400 hover:underline">
                            <img
                              src={wisata.foto}
                              alt="Foto"
                              className="w-5 h-5 mr-2"
                            />
                            Foto
                          </a>
                        </td>
                        <td className="p-3 text-center flex">
                          <Link
                            to={`/editwisata/${wisata.id}`}
                            className="inline-block bg-green-500 hover:bg-green-600 p-2 rounded-lg mr-2">
                            Edit
                          </Link>
                          <button
                            onClick={() => handleDelete(wisata.id)}
                            className="inline-block bg-red-500 hover:bg-red-600 p-2 rounded-lg">
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}

                    {filteredWisata.length === 0 && (
                      <tr>
                        <td
                          colSpan="8"
                          className="p-3 text-center text-gray-500">
                          Tidak ada data tempat wisata yang ditemukan
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </main>

          <FooterAdmin />
        </div>
      </div>
    </div>
  );
};

export default WisataList;
