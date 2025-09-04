// JS for hamburger button
const navbar = document.querySelector(".nav-links");
function onToggleMenu(e) {
  e.name = e.name === "menu" ? "close" : "menu";
  navbar.classList.toggle("top-[7%]");
}

// Save data into Localstorage
let uname = document.getElementById("username");
let Email = document.getElementById("useremail");
let Message = document.getElementById("usermssg");
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

// Save data into localstorage of Array object
// function saveData(event) {
//   event.preventDefault();

//   const formData = {
//     uname: document.getElementById("name").value,
//     email: document.getElementById("email").value,
//     message: document.getElementById("mssg").value,
//   };

//   const saveData = JSON.parse(localStorage.getItem("saveTols")) || [];
//   saveData.push(formData);
//   localStorage.setItem("saveTols", JSON.stringify(saveData));

//   document.getElementById("cForm").reset();
// }


// function for form validation Using rEgEx
function validateForm() {
  const uname = document.getElementById("username").value.trim();
  const email = document.getElementById("useremail").value.trim();
  const message = document.getElementById("usermssg").value.trim();

  // javascript validation for form
  const unameRegex = /^[A-Za-z\s]+$/;
  const uemailRegex = /^[a-z0-9.]+/;
  const umssgRegex = /^[A-Za-z0-9\s.,!?-]{10,500}$/;

  if (!unameRegex.test(uname)) {
    alert("Invalid Username...");
    return false;
  }

  if (!uemailRegex.test(email)) {
    alert("Invalid Email format.");
    return false;
  }

  if (!umssgRegex.test(message)) {
    alert("Message must be 10–500 characters and contain only letters...");
    return false;
  }

  alert("Form submitted successfully!");
  return true;
}

// function validateForm() {
//   let uname = document.forms["cForm"]["username"].value;
//   let uemail = document.forms["cForm"]["useremail"].value;
//   let umssg = document.forms["cForm"]["usermssg"].value;

//   //
//   if (uname == "" || uemail == "" || umssg == "") {
//     alert("Fill all blanks");
//   } else {
//     alert("Form submitted successfully");
//   }
// }
