function toggleDropdownUser() {
  const menu = document.getElementById("dropdownUserMenu");
  const arrow = document.getElementById("arrowUser");

  // Pastikan hanya menutup dropdown lain
  closeAllDropdowns("dropdownUserMenu");

  menu.classList.toggle("hidden");
  arrow.classList.toggle("rotate-180");
}

// Menutup dropdown jika klik di luar elemen dropdown
document.addEventListener("click", function (event) {
  const dropdown = document.getElementById("dropdownUserMenu");
  const button = document.getElementById("buttonPengguna");
  const arrow = document.getElementById("arrowUser");

  if (!button.contains(event.target) && !dropdown.contains(event.target)) {
    dropdown.classList.add("hidden");
    arrow.classList.remove("rotate-180");
  }
});

// Menangkap klik pada dropdown dan mengarahkan ke halaman terkait
document.querySelectorAll("#dropdownUserMenu li").forEach((item) => {
  item.addEventListener("click", function () {
    const targetPage = this.getAttribute("data-href");
    if (targetPage) {
      window.location.href = targetPage; // Navigasi ke halaman
    }
  });
});

// Fungsi toggle dropdown Pengajuan
function toggleDropdownPengajuan() {
  const menu = document.getElementById("dropdownPengajuan");
  const arrow = document.getElementById("arrowPengajuan");

  closeAllDropdowns("dropdownPengajuan");

  menu.classList.toggle("hidden");
  arrow.classList.toggle("rotate-180");
}

// Menutup dropdown jika klik di luar elemen dropdown
document.addEventListener("click", function (event) {
  const dropdown = document.getElementById("dropdownPengajuan");
  const button = document.getElementById("buttonPengajuan");
  const arrow = document.getElementById("arrowPengajuan");

  if (!button.contains(event.target) && !dropdown.contains(event.target)) {
    dropdown.classList.add("hidden");
    arrow.classList.remove("rotate-180");
  }
});

// Fungsi menutup dropdown lain sebelum membuka dropdown yang baru
function closeAllDropdowns(exceptId) {
  const dropdowns = {
    dropdownUserMenu: "arrowUser",
    dropdownPengajuan: "arrowPengajuan",
  };

  Object.keys(dropdowns).forEach((id) => {
    if (id !== exceptId) {
      const menu = document.getElementById(id);
      const arrow = document.getElementById(dropdowns[id]);

      if (menu && !menu.classList.contains("hidden")) {
        menu.classList.add("hidden");
        arrow.classList.remove("rotate-180");
      }
    }
  });
}

// Menangkap klik pada dropdown dan mengarahkan ke halaman terkait
document.querySelectorAll("#dropdownPengajuan li").forEach((item) => {
  item.addEventListener("click", function () {
    const targetPage = this.getAttribute("data-href");
    if (targetPage) {
      window.location.href = targetPage; // Navigasi ke halaman
    }
  });
});

//Fungsi dropdown Edit Fitur
function toggleDropdownEditFitur() {
  const menu = document.getElementById("dropdownEditFitur");
  const arrow = document.getElementById("arrowEditFitur");

  // Pastikan hanya menutup dropdown lain
  closeAllDropdowns("dropdownEditFitur");

  menu.classList.toggle("hidden");
  arrow.classList.toggle("rotate-180");
}

// Menutup dropdown jika klik di luar elemen dropdown
document.addEventListener("click", function (event) {
  const dropdown = document.getElementById("dropdownEditFitur");
  const button = document.getElementById("buttonEditFitur");
  const arrow = document.getElementById("arrowEditFitur");

  if (!button.contains(event.target) && !dropdown.contains(event.target)) {
    dropdown.classList.add("hidden");
    arrow.classList.remove("rotate-180");
  }
});

// Menangkap klik pada dropdown dan mengarahkan ke halaman terkait
document.querySelectorAll("#dropdownEditFitur li").forEach((item) => {
  item.addEventListener("click", function () {
    const targetPage = this.getAttribute("data-href");
    if (targetPage) {
      window.location.href = targetPage; // Navigasi ke halaman
    }
  });
});

//Edit action
document.addEventListener("DOMContentLoaded", function () {
  const editButtons = document.querySelectorAll(".edit-btn");
  const editModal = document.getElementById("editModal");
  const cancelEdit = document.getElementById("cancelEdit");
  const saveEdit = document.getElementById("saveEdit");

  // Input fields
  const editName = document.getElementById("editName");
  const editEmail = document.getElementById("editEmail");
  const editPhone = document.getElementById("editPhone");

  // Event listener untuk semua tombol edit
  editButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Mengisi input dengan data dari atribut tombol
      editName.value = this.getAttribute("data-name");
      editEmail.value = this.getAttribute("data-email");
      editPhone.value = this.getAttribute("data-phone");

      // Tampilkan modal
      editModal.classList.remove("hidden");
    });
  });

  // Tutup modal saat klik batal
  cancelEdit.addEventListener("click", function () {
    editModal.classList.add("hidden");
  });

  // Simpan perubahan (bisa disesuaikan dengan backend atau localStorage)
  saveEdit.addEventListener("click", function () {
    alert("Data berhasil diperbarui!"); // Bisa diganti dengan fungsi update data ke database
    editModal.classList.add("hidden");
  });
});

//Delete action
document.addEventListener("DOMContentLoaded", function () {
  const deleteButtons = document.querySelectorAll(".delete-btn");
  const deleteModal = document.getElementById("deleteModal");
  const cancelDelete = document.getElementById("cancelDelete");
  const confirmDelete = document.getElementById("confirmDelete");

  deleteButtons.forEach((button) => {
    button.addEventListener("click", function () {
      deleteModal.classList.remove("hidden"); // Tampilkan modal
    });
  });

  cancelDelete.addEventListener("click", function () {
    deleteModal.classList.add("hidden"); // Tutup modal jika tekan "Tidak"
  });

  confirmDelete.addEventListener("click", function () {
    alert("Pengguna berhasil dihapus!"); // Gantilah dengan fungsi backend jika diperlukan
    deleteModal.classList.add("hidden"); // Tutup modal setelah konfirmasi
  });
});
