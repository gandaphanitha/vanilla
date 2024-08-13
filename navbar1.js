

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
const menubar = document.querySelector(".menubar");

navToggle.addEventListener("click", function () {
  links.classList.toggle("show-links");
  let shoemenu = menubar.firstElementChild;
  if (links.classList.contains("show-links")) {
    shoemenu.classList.replace("fa-bars", "fa-close");
  } else {
    shoemenu.classList.replace("fa-close", "fa-bars");
  }
});
  
