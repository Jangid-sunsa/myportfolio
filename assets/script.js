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

button.addEventListener("click", () => {
  const value = uname.value;
  localStorage.setItem("Name", value);
  const emailValue = Email.value;
  localStorage.setItem("Email", emailValue);
  const mssgValue = Message.value;
  localStorage.setItem("Message", mssgValue);

  document.getElementById("cForm").reset();
});

// *********************************************************************************************** This section for tabluler show data *******************************************************************************************************************
// let uname = document.getElementById("contact-name");
// let Email = document.getElementById("contact-email");
// let Message = document.getElementById("contact-mssg");
// let button = document.getElementById("clickbtn");

// button.addEventListener("click", () => {
//   const value = uname.value;
//   const emailValue = Email.value;
//   const mssgValue = Message.value;

//   let data = JSON.parse(localStorage.getItem("formData")) || [];

//   data.push({ name: value, email: emailValue, message: mssgValue });
//   localStorage.setItem("formData", JSON.stringify(data));
//   document.getElementById("cForm").reset();

//   showData();
// });

// function showData() {
//   let tableBody = document.querySelector("tbody");
//   tableBody.innerHTML = "";

//   // Retrieve stored form data from localStorage
//   let data = JSON.parse(localStorage.getItem("formData")) || [];

//   if (data.length > 0) {
//     data.forEach((entry, index) => {
//       let newRow = document.createElement("tr");

//       newRow.innerHTML = `<tr>
//         <td class="greetName px-6 py-3 text-start text-sm text-black font-medium bg-white border border-black">${
//           index + 1
//         }</td>
//         <td class="greetName px-6 py-3 text-start text-sm text-black font-medium bg-white border border-black">${
//           entry.name
//         }</td>
//         <td class="greetName px-6 py-3 text-start text-sm text-black font-medium bg-white border border-black">${
//           entry.email
//         }</td>
//         <td class="greetName px-6 py-3 text-start text-sm text-black font-medium bg-white border border-black">${
//           entry.message
//         }</td>
//       </tr>`;

//       tableBody.appendChild(newRow);
//     });
//   } else {
//     console.log("No data found in localStorage.");
//   }
// } window.onload = showData;

// *********************************************************************************************** This section for tabluler show data *******************************************************************************************************************

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
  let required = 50;
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
    alert("First fill the form");
    return false;
  } else {
    alert("Form submited successfully");
    resetErr();
    return true;
  }
}
