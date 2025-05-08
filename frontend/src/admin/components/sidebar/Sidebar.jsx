import { useState } from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  const [dropdownStates, setDropdownStates] = useState({
    userMenu: false,
    editFiturMenu: false,
    pengajuanMenu: false,
  });

  const toggleDropdown = (menu) => {
    // Tutup semua dropdown terlebih dahulu
    const newStates = {
      userMenu: false,
      editFiturMenu: false,
      pengajuanMenu: false,
    };

    // Toggle dropdown yang dipilih
    newStates[menu] = !dropdownStates[menu];

    setDropdownStates(newStates);
  };

  return (
    <aside className="w-64 bg-white shadow-md flex flex-col min-h-screen">
      <nav className="mt-4 flex-1">
        <ul>
          <li className="relative rounded">
            <button className="w-full flex justify-between items-center px-6 py-3 hover:bg-blue-100">
              <div className="flex items-center">
                <Link to="/">🏠 Dashboard</Link>
              </div>
            </button>
          </li>

          <li className="relative">
            <button
              onClick={() => toggleDropdown("userMenu")}
              className="w-full flex justify-between items-center px-6 py-3 hover:bg-blue-100">
              <div className="flex items-center">
                <span className="mr-3">👤</span> Pengguna
              </div>
              <img
                src="/img/dropdownimg.png"
                alt="Dropdown Icon"
                className={`w-4 h-4 transition-transform duration-300 ${
                  dropdownStates.userMenu ? "rotate-180" : ""
                }`}
              />
            </button>
            <ul
              className={`ml-6 mt-1 text-sm ${
                dropdownStates.userMenu ? "" : "hidden"
              } bg-white shadow-md rounded-md`}>
              <li className="px-6 py-2 hover:bg-blue-100 cursor-pointer">
                <Link to="/admin">Admin</Link>
              </li>
              <li className="px-6 py-2 hover:bg-blue-100 cursor-pointer">
                <a href="/pengguna">Umum</a>
              </li>
            </ul>
          </li>

          <li className="relative">
            <button
              onClick={() => toggleDropdown("editFiturMenu")}
              className="w-full flex justify-between items-center px-6 py-3 hover:bg-blue-100">
              <div className="flex items-center">
                <span className="mr-3">⚙️</span> Edit Fitur
              </div>
              <img
                src="/img/dropdownimg.png"
                alt="Dropdown Icon"
                className={`w-4 h-4 transition-transform duration-300 ${
                  dropdownStates.editFiturMenu ? "rotate-180" : ""
                }`}
              />
            </button>
            <ul
              className={`ml-6 mt-1 text-sm ${
                dropdownStates.editFiturMenu ? "" : "hidden"
              } bg-white shadow-md rounded-md`}>
              <li className="px-6 py-2 hover:bg-blue-100 cursor-pointer">
                <a href="/jadwal">Jadwal</a>
              </li>
              <li className="px-6 py-2 hover:bg-blue-100 cursor-pointer">
                <a href="/berita">Berita</a>
              </li>
              <li className="px-6 py-2 hover:bg-blue-100 cursor-pointer">
                <a href="/wisata">Tempat Wisata</a>
              </li>
            </ul>
          </li>

          <li className="relative">
            <button
              onClick={() => toggleDropdown("pengajuanMenu")}
              className="w-full flex justify-between items-center px-6 py-3 hover:bg-blue-100">
              <div className="flex items-center">
                <span className="mr-3">📑</span> Pengajuan
              </div>
              <img
                src="/img/dropdownimg.png"
                alt="Dropdown Icon"
                className={`w-4 h-4 transition-transform duration-300 ${
                  dropdownStates.pengajuanMenu ? "rotate-180" : ""
                }`}
              />
            </button>
            <ul
              className={`ml-6 mt-1 text-sm ${
                dropdownStates.pengajuanMenu ? "" : "hidden"
              } bg-white shadow-md rounded-md`}>
              <li className="px-6 py-2 hover:bg-blue-100 cursor-pointer">
                <a href="pengajuanadmin.html">List Pengajuan</a>
              </li>
              <li className="px-6 py-2 hover:bg-blue-100 cursor-pointer">
                <a href="approvenew.html">Approved</a>
              </li>
              <li className="px-6 py-2 hover:bg-blue-100 cursor-pointer">
                <a href="rejectpengajuan.html">Rejected</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
