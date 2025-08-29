const navbar = document.querySelector(".nav-links");
// console.log(navbar);
function onToggleMenu(e) {
  e.name = e.name === "menu" ? "close" : "menu";
  navbar.classList.toggle("top-[9%]");
}



