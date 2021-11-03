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

//_______________________________________________________________FORM________________________________________________________________________
//Keep Inputs Value
const firstName = document.querySelector("#first");
const lastName = document.querySelector("#last");
const email = document.querySelector("#email");
const birthDate = document.querySelector("#birthdate");
const quantity = document.querySelector("#quantity");
let chooseLocation = document.querySelectorAll(".checkbox-input[type=radio]");
const termsOfUse = document.querySelector("#checkbox1");
let regex;

//Control Inputs Value
//control firstname input
function firstNameController() {
	regex = /^[-'a-zA-ZÀ-ÖØ-öø-ÿ ]{2,20}$/;
	return regex.test(firstName.value);
}
//control lastname input
function lastNameController() {
  regex = /^[-'a-zA-ZÀ-ÖØ-öø-ÿ ]{2,20}$/;
	return regex.test(lastName.value);
}
//control email input
function emailController() {
  regex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
	return regex.test(email.value);
}
//control birthdate
function birthdateController(){
  let birthdate = new Date(birthDate.value);
  let todaySDate = new Date();
  if (todaySDate.getFullYear() - birthdate.getFullYear() < 18) {
    console.log("vous n'êtes pas majeur!")
    return false;
  }else if(todaySDate.getFullYear() - birthdate.getFullYear() > 150){
      console.log("les vampires n'existent pas :'D désolé tu t'es probalement trompé ;)")
      return false
  }else if(todaySDate.getFullYear() - birthdate.getFullYear() >= 18 && todaySDate.getFullYear() - birthdate.getFullYear() < 150){
    return true
  }
}
//control tournaments quantity
function quantityController() {
  regex = /^[0-9]+$/;
	return regex.test(quantity.value);
}
//control location
function locationController() {
  for (let radio of chooseLocation) {
		if (radio.checked === true) return true;
	}
	return false;
}
//control if terms of use checked
function termsOfUseController() {
  return termsOfUse.checked;
}

//Valid form if inputs are correct
function validate(event) {
	event.preventDefault();
	let inputIsCorrect = true;
	if (!firstNameController()) {
		inputIsCorrect = false;
		console.log('first name incorrect');
	}
	if (!lastNameController()) {
		inputIsCorrect = false;
		console.log('last name incorrect');
	}
	if (!emailController()) {
		inputIsCorrect = false;
		console.log('email incorrect');
	}
	if (!birthdateController()) {
		inputIsCorrect = false;
		console.log('birthDate incorrect');
	}
	if (!quantityController()) {
		inputIsCorrect = false;
		console.log('Quantity not specified ');
	}
	if (!locationController()) {
		inputIsCorrect = false;
		console.log('Location is not selected');
	}
	if (!termsOfUseController()) {
		inputIsCorrect = false;
		console.log('terms of use is not checked');
	}
	if (inputIsCorrect) {
		formIsValid();
		console.log('Validé!!')
	}
}