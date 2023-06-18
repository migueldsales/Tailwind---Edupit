const headerNav = document.querySelectorAll(".drop-nav h4");
headerNav.forEach((hNav) => {
  hNav.addEventListener("mousemove", () => {
    hNav.nextElementSibling.classList.add("drop");
  });
  hNav.addEventListener("mouseout", () => {
    hNav.nextElementSibling.classList.remove("drop");
  });
});

const toggleMenu = document.querySelector(".toggle-menu");
const headerBot = document.querySelector(".header-wrapper ul");
toggleMenu.addEventListener("click", () => {
  toggleMenu.classList.toggle("open");
  headerBot.classList.toggle("open");
});

const dropNav = document.querySelectorAll(".header-wrapper ul li a");
dropNav.forEach((dropN) => {
  dropN.addEventListener("click", () => {
    dropN.nextElementSibling.classList.toggle("open");
    dropN.classList.toggle("open");
  });
});

const faqs = document.querySelectorAll(".header-item h4");
faqs.forEach((drop) => {
  drop.addEventListener("click", () => {
    drop.nextElementSibling.classList.toggle("open");
    drop.querySelector("i").classList.toggle("open");
  });
});

const gutter = document.querySelector(".header-wrapper.nav");
window.addEventListener("scroll", () => {
  console.log(window.pageYOffset);
  if (window.pageYOffset >= 300) {
    gutter.classList.add("top");
  } else {
    gutter.classList.remove("top");
  }
});