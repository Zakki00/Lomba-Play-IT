const menuIcon = document.getElementById("menu-icon");
const menuList = document.getElementById("menu-list");
const menuItems = menuList.querySelectorAll("li");

menuIcon.addEventListener("click", () => {
    menuList.classList.toggle("active");
    if (menuList.classList.contains("active")) {
        menuItems.forEach((item, index) => {
            item.style.transitionDelay = `${index * 0.1}s`;
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        });
    } else {
        menuItems.forEach(item => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(-10px)';
        });
    }
});