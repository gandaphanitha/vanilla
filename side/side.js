const menubar = document.querySelector(".menubar")
const links = document.querySelector(".links")
menubar.addEventListener('click', navEvent)
function navEvent() {
  links.classList.toggle("phanitha")
  let shoemenu = menubar.firstElementChild;
  if (links.classList.contains("phanitha")) {
    shoemenu.classList.replace("fa-bars", "fa-close")
  }
  else {
    shoemenu.classList.replace("fa-close", "fa-bar")
  }
}


// const menubar = document.querySelector(".menubar")
// const lists = document.querySelector(".lists")
// menubar.addEventListener('click', navEvent)





// let toggle_bar = document.querySelector(".nav-header");

// let sidebar = document.querySelector(".sidebar");

// toggle_bar.addEventListener("click", function(){
// if(toggle_bar.firstElementChild.classList.contains("fa-bars"))
// {
// toggle_bar.firstElementChild.classList.replace("fa-bars","fa-times");
// }
// else
// {
// toggle_bar.firstElementChild.classList.replace("fa-times","fa-bars");
// }
// sidebar.classList.toggle("sidebaractive")
// })

