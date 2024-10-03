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
