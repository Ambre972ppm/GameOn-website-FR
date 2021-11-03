// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelector(".close");
const closeConfirmation = document.querySelector(".closeConfirmation");
const btnClose = document.querySelector('#btnClose');
const btnSubmit = document.querySelector("#btnSubmit");
const form = document.querySelector("form");
const modalConfirmation = document.querySelector(".modal-confirmation");

function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
//close modal form
function closeModal() {
    modalbg.style.display = "none";  
}

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
//close modal event
closeBtn.addEventListener("click", closeModal);