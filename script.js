document.addEventListener("DOMContentLoaded", function() {
    const sidebar = document.getElementById("sidebar");
    const menuToggle = document.getElementById("menu-toggle");
    const content = document.getElementById("content");

    // Menambahkan event listener untuk tombol toggle
    menuToggle.addEventListener("click", function() {
        // Cek apakah sidebar tertutup atau terbuka
        if (sidebar.style.left === "0px") {
            sidebar.style.left = "-250px"; // Tutup sidebar
            content.style.marginLeft = "0"; // Kembalikan margin konten
        } else {
            sidebar.style.left = "0"; // Buka sidebar
            content.style.marginLeft = "250px"; // Geser konten untuk memberi ruang pada sidebar
        }
    });

    // Menutup sidebar jika klik di luar sidebar atau tombol toggle
    document.addEventListener("click", function(event) {
        if (!sidebar.contains(event.target) && event.target !== menuToggle) {
            sidebar.style.left = "-250px"; // Tutup sidebar
            content.style.marginLeft = "0"; // Kembalikan margin konten
        }
    });

    // Mencegah klik di dalam sidebar dan menu toggle menutup sidebar
    sidebar.addEventListener("click", function(event) {
        event.stopPropagation();
    });

    menuToggle.addEventListener("click", function(event) {
        event.stopPropagation();
    });
});
