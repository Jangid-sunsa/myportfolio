// JS for hamburger button
const navbar = document.querySelector(".nav-links");
function onToggleMenu(e) {
  e.name = e.name === "menu" ? "close" : "menu";
  navbar.classList.toggle("top-[7%]");
}

// Save data into localstorage using js
function saveData(event) {
  event.preventDefault();

  const formData = {
    uname: document.getElementById("name").value,
    email: document.getElementById("email").value,
    mNum: document.getElementById("num").value,
    message: document.getElementById("mssg").value,
  };

  const saveData = JSON.parse(localStorage.getItem("saveTols")) || [];
  saveData.push(formData);
  localStorage.setItem("saveTols", JSON.stringify(saveData));

  document.getElementById("cForm").reset();
}

