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
  var myTopnav = document.getElementById("myTopnav");
  if (myTopnav.className === "topnav") {
    myTopnav.className += " responsive";
  } else {
    myTopnav.className = "topnav";
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

// launch registration confirmed message
function registrationConfirmed() {
	modalbg.style.display = "none";
	modalConfirmation.style.display = "block";
  }
  
  // close registration confirmed message
  function closeRegistrationConfirmed() {
	  closeConfirmation.addEventListener("click", () => {
		  modalConfirmation.style.display = "none";
	  });
	  btnClose.addEventListener("click", () => {
		  modalConfirmation.style.display = "none";
	  });
  }
  
  //If form is valid
  function formIsValid() {
	//launch modal confirmation
	  registrationConfirmed();
	//close modal confirmation
	  closeRegistrationConfirmed();
  }

//Valid form if inputs are correct
function validate(event) {
	event.preventDefault();
	let inputIsCorrect = true;
	if (!firstNameController()) {
		inputIsCorrect = false;
		let firstNameData = document.querySelector('#firstNameData');
		firstNameData.setAttribute("data-error-visible", true);
		firstNameData.setAttribute("data-error", message = "Veuillez entrer 2 caractères ou plus (hors chiffres et caractères spéciaux)");
	}
	if (!lastNameController()) {
		inputIsCorrect = false;
		let lastNameData = document.querySelector('#lastNameData');
		lastNameData.setAttribute("data-error-visible", true);
		lastNameData.setAttribute("data-error", message = "Veuillez entrer 2 caractères ou plus (hors chiffres et caractères spéciaux)");
	}
	if (!emailController()) {
		inputIsCorrect = false;
		let emailData = document.querySelector('#emailData');
		emailData.setAttribute("data-error-visible", true);
		emailData.setAttribute("data-error", message = "Veuillez renseigner une adresse email valide");
	}
	if (!birthdateController()) {
		inputIsCorrect = false;
		let birthDateData = document.querySelector('#birthDateData');
		birthDateData.setAttribute("data-error-visible", true);
		birthDateData.setAttribute("data-error", message = "Vous devez entrer votre date de naissance(18 ans requis pour participer)");
	}
	if (!quantityController()) {
		inputIsCorrect = false;
		let quantityData = document.querySelector('#quantityData');
		quantityData.setAttribute("data-error-visible", true);
		quantityData.setAttribute("data-error", message = "Veuillez renseigner un nombre compris entre 0 et 99");
	}
	if (!locationController()) {
		inputIsCorrect = false;
		let locationData = document.querySelector('#locationData');
		locationData.setAttribute("data-error-visible", true);
		locationData.setAttribute("data-error", message = "Veuillez choisir une option");
	}
	if (!termsOfUseController()) {
		inputIsCorrect = false;
		let termsOfUseData = document.querySelector('#termsOfUseData');
		termsOfUseData.setAttribute("data-error-visible", true);
		termsOfUseData.setAttribute("data-error", message = "Vous devez accepter les conditions d'utilisations");
	}
	if (inputIsCorrect) {
		formIsValid();
	}
}