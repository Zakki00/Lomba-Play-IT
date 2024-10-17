
function toggleExpand(element) {
    element.classList.toggle('expanded');
    console.log('Fungsi toggleExpand dipanggil.');
}

document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.querySelector('.toggle');
    const navLinks = document.querySelector('.nav-links');

    // Toggle menu navigasi dengan animasi
    toggleButton.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Menutup menu ketika halaman berganti
    window.addEventListener('beforeunload', () => {
        navLinks.classList.remove('active');
    });
});
    
toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    setTimeout(() => {
        AOS.refresh();
    }, 300); // Menunggu 300ms sebelum AOS refresh
});
