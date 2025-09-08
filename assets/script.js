// JS for hamburger button
const navbar = document.querySelector(".nav-links");
function onToggleMenu(e) {
  e.name = e.name === "menu" ? "close" : "menu";
  navbar.classList.toggle("top-[7%]");
}

// Save data into Localstorage
let uname = document.getElementById("contact-name");
let Email = document.getElementById("contact-email");
let Message = document.getElementById("contact-mssg");
let button = document.getElementById("clickbtn");

const form = document.getElementById("cForm");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (validateForm()) {
    localStorage.setItem("Name", uname.value);
    localStorage.setItem("Email", Email.value);
    localStorage.setItem("Message", Message.value);
    alert("Form submitted successfully!");
    form.reset();
  }
});

// function for form validation Using rEgEx

let nameErr = document.getElementById("name-error");
let emailErr = document.getElementById("email-error");
let msgErr = document.getElementById("mssg-error");
let submitErr = document.getElementById("submit-error");

function resetErr() {
  document.getElementById("name-error").textContent = "";
  document.getElementById("email-error").textContent = "";
  document.getElementById("mssg-error").textContent = "";
  document.getElementById("submit-error").textContent = "";
}

function validateName() {
  let name = document.getElementById("contact-name").value;

  if (name.length == 0) {
    nameErr.innerHTML = "Name is required";
    return false;
  } else if (!name.match(/^[A-Za-z\s]+/)) {
    nameErr.innerHTML = "Enter valid name";
    return false;
  } else {
    nameErr.innerHTML =
      '<i class="fa-solid fa-circle-check text-lg text-green-800 absolute right-2 top-4.5"></i>';
    return true;
  }
}

function validateEmail() {
  let email = document.getElementById("contact-email").value;

  if (email.length == 0) {
    emailErr.innerHTML = "Email is required";
    return false;
  } else if (!email.match(/^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/)) {
    emailErr.innerHTML = "Invalid email";
    return false;
  } else {
    emailErr.innerHTML =
      '<i class="fa-solid fa-circle-check text-lg text-green-800 absolute right-2 top-4.5"></i>';
    return true;
  }
}

function validateMssg() {
  let message = document.getElementById("contact-mssg").value;
  let required = 10;
  let left = required - message.length;

  if (left > 0) {
    msgErr.innerHTML = left + " More characters required";
    return false;
  } else {
    msgErr.innerHTML =
      '<i class="fa-solid fa-circle-check text-lg text-green-800 absolute right-2 top-4.5"></i>';
  }
}

function validateForm() {
  if (!validateName() && !validateEmail() && !validateMssg()) {
    // alert("First fill the form");
    return false;
  } else {
    // resetErr();
    return true;
  }
}
