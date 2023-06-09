const toggleMenu = document.querySelector(".toggle-menu");
const mobileNav = document.querySelector(".header-nav-drop");
toggleMenu.addEventListener("click", () => {
    toggleMenu.classList.toggle("open");
    mobileNav.classList.toggle("open");
}
)
const NavDropToggle = document.querySelectorAll(".nav-drop-item h4")
const NavDropToggleMenu = document.querySelector(".nav-drop-toggle-menu")
const NavDropUlToggle = document.querySelector(".nav-drop-sub-item");
NavDropToggle.forEach((drop)=>{
    drop.addEventListener("click", () => {
        drop.classList.toggle("open");
        NavDropToggleMenu.classList.toggle("open")
        drop.nextElementSibling.classList.toggle("open");
    });
});


