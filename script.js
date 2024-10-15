
function toggleExpand(element) {
    element.classList.toggle('expanded');
}
 
// script.js
document.querySelector('.toggle').addEventListener('click', function() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
});
    