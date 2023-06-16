// const toggleMenu = document.querySelector(".toggle-menu");
// const mobileNav = document.querySelector(".header-nav-drop");
// toggleMenu.addEventListener("click", () => {
//     toggleMenu.classList.toggle("open");
//     mobileNav.classList.toggle("open");
// }
// )
// const NavDropToggle = document.querySelectorAll(".nav-drop-item h4")
// const NavDropToggleMenu = document.querySelector(".nav-drop-toggle-menu")
// const NavDropUlToggle = document.querySelector(".nav-drop-sub-item");
// NavDropToggle.forEach((drop)=>{
//     drop.addEventListener("click", () => {
//         drop.classList.toggle("open");
//         NavDropToggleMenu.classList.toggle("open")
//         drop.nextElementSibling.classList.toggle("open");
//     });
// });



// V2
// const toggleMenu = document.querySelector(".toggle__menu");
// const mobileNav = document.querySelector(".header__nav nav");
// toggleMenu.addEventListener("click", () => {
//     toggleMenu.classList.toggle("open");
//     mobileNav.classList.toggle("open");
// }
// )
// const NavDropToggle = document.querySelectorAll(".drop__toggle")
// const NavDropToggleMenu = document.querySelector(".drop__content")
// const NavDropUlToggle = document.querySelector(".drop__nav group");
// NavDropToggle.forEach((drop)=>{
//     drop.addEventListener("click", () => {
//         drop.classList.toggle("open");
//         NavDropToggleMenu.classList.toggle("open");
//         drop.nextElementSibling.classList.toggle("open");
//         MavDropToggleMenu.classList.remove("open");

//     });
// });

// const bannerfloat = document.querySelector(".header");
// window.addEventListener("scroll", () => {
//   console.log(window.pageYOffset);
//   if (window.pageYOffset >= 100) {
//     header.classList.add("header-nav-top");
//   } else {
//     header.classList.remove("header-nav-top");
//   }
// });

const headerNav = document.querySelectorAll(".drop__nav h4");
headerNav.forEach((hNav) => {
  hNav.addEventListener("mousemove", () => {
    hNav.nextElementSibling.classList.add("drop");
  });
  hNav.addEventListener("mouseout", () => {
    hNav.nextElementSibling.classList.remove("drop");
  });
});

const toggleMenu = document.querySelector(".toggle__menu");
const headerBot = document.querySelector(".header__nav nav");
toggleMenu.addEventListener("click", () => {
  toggleMenu.classList.toggle("open");
  headerBot.classList.toggle("open");
});

const dropNav = document.querySelectorAll(".drop__nav h4");
dropNav.forEach((dropN) => {
  dropN.addEventListener("click", () => {
    dropN.nextElementSibling.classList.toggle("open");
    dropN.querySelector(".drop__toggle").classList.toggle("open");
  });
});

const faqs = document.querySelectorAll(".header__item h4");
faqs.forEach((drop) => {
  drop.addEventListener("click", () => {
    drop.nextElementSibling.classList.toggle("open");
    drop.querySelector("i").classList.toggle("open");
  });
});