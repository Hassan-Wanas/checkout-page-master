let counter1 = 0;
let counter2 = 0;

let item1Amount = document.getElementById("item1Amount");
let item2Amount = document.getElementById("item2Amount");

item1Amount.innerText = counter1;
item2Amount.innerText = counter2;


document.getElementById("decrement1").addEventListener("click", function (e) {
  e.preventDefault()
  if (counter1 == 0) {
    return;
  }
  counter1--;
  item1Amount.innerText  = counter1;
});

document.getElementById("increment1").addEventListener("click", function (e) {
  e.preventDefault()
  counter1++;
  item1Amount.innerText  = counter1;
});

document.getElementById("decrement2").addEventListener("click", function (e) {
  e.preventDefault()
  if (counter2 == 0) {
    return;
  }
  counter2--;
  item2Amount.innerText  = counter2;
});

document.getElementById("increment2").addEventListener("click", function (e) {
  e.preventDefault()
  counter2++;
  item2Amount.innerText  = counter2;
});


/* 
Any one can help me fix what is down there plz contact me
On LinkedIn @Hassan-Wanas
Using mail: hassan0Wanas@gmail.com
*/


let total = document.getElementById("total");
let shipping = parseFloat(document.getElementById("shipping").innerText);
let item1Price = parseFloat(document.getElementById("item1Price").innerText);
let item2Price = parseFloat(document.getElementById("item2Price").innerText);

total.innerText = item1Amount.innerText * item1Price + item2Amount.innerText * item2Price + shipping;


// validation, i need help with it too

let form = document.getElementById("form");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let fullName = document.getElementById("fullName");
let address = document.getElementById("address");
let city = document.getElementById("city");
let country = document.getElementById("country");
let postal = document.getElementById("postal");
let save = document.getElementById("save");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs();
});

const setError = (element, message) => {
  const formGroup = element.parentElement;
  const errorDisplay = formGroup.querySelector(".error");

  errorDisplay.innerText = message;
  formGroup.classList.add("error");
  formGroup.classList.remove("success");
};

const setSuccess = (element) => {
  const formGroup = element.parentElement;
  const errorDisplay = formGroup.querySelector(".error");

  errorDisplay.innerText = "";
  formGroup.classList.add("success");
  formGroup.classList.remove("error");
};

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(string(email).toLowerCase());
};

const validateInputs = () => {
  const emailValue = email.value.trim();
  const phoneValue = phone.value.trim();
  const fullNameValue = fullName.value.trim();
  const addressValue = address.value.trim();
  const cityValue = city.value.trim();
  const countryValue = country.value.trim();
  const postalValue = postal.value.trim();

  if (emailValue === "") {
    setError(email, "Email is required");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Provide a valid email address");
  } else {
    setSuccess(email);
  }

  if (phoneValue === "") {
    setError(phone, "Phone number is required");
  } else {
    setSuccess(phone);
  }

  if (fullNameValue === "") {
    setError(fullName, "Full name is required");
  } else {
    setSuccess(fullName);
  }

  if (addressValue === "") {
    setError(address, "Address is required");
  } else {
    setSuccess(address);
  }

  if (cityValue === "") {
    setError(city, "City is required");
  } else {
    setSuccess(city);
  }

  if (countryValue === "") {
    setError(country, "Country is required");
  } else {
    setSuccess(country);
  }

  if (postalValue === "") {
    setError(postal, "Postal number is required");
  } else {
    setSuccess(postal);
  }
};

/*
if (save.checked) {
  form.setAttribute('autocomplete', 'on')
} else {
  form.removeAttribute('autocomplete')
} */
