// Menambahkan pesan selamat datang di bagian Home
document.addEventListener("DOMContentLoaded", function() {
    const homeSection = document.querySelector('#home');
    const welcomeMessage = document.createElement('p');
    welcomeMessage.textContent = "Temukan pesona budaya Tuban melalui keindahan seni dan tarian tradisional!";
    homeSection.appendChild(welcomeMessage);
});

// Contoh fungsi untuk mengubah konten secara dinamis
function changeContent(sectionId, content) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.innerHTML = content;
    }
}
// Seleksi elemen
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

// Tambahkan event listener pada tombol menu
menuToggle.addEventListener('click', () => {
    nav.classList.toggle('open'); // Toggle class 'open' untuk menampilkan/menyembunyikan navigasi
});

