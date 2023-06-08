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
        drop.nextElementSibling.classList.toggle("open");
    });
});

const NavDropToggleExp = document.querySelectorAll(".nav-drop-sub-item h5")
const NavDropUlToggleExp = document.querySelector(".nav-drop-sub-item-exp");
NavDropToggleExp.forEach((dropExp)=>{
    dropExp.addEventListener("click", () => {
        dropExp.classList.toggle("open");
        dropExp.nextElementSibling.classList.toggle("open");
    });
});
const NavDropToggleExp2 = document.querySelectorAll(".nav-drop-sub-item h5")
const NavDropUlToggleExp2 = document.querySelector(".nav-drop-sub-item-exp2");
NavDropToggleExp2.forEach((dropExp2)=>{
    dropExp2.addEventListener("click", () => {
        dropExp2.classList.toggle("open");
        dropExp2.nextElementSibling.classList.toggle("open");
    });
});
