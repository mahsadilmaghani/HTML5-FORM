// This JS file checks for validation and verification of the data

// This function validates the poscodes for US or UK
function validatePostCode() {
  var countrySelectElem = document.getElementById("country");
  var countryValue = countrySelectElem.options[countrySelectElem.selectedIndex].value;

  if (countryValue == "US") {
    document.getElementById("postcode").pattern = "[0-9]{5}";
  }
  else if (countryValue == "UK") {
    document.getElementById("postcode").pattern = "[A-Za-z]{1,2}[0-9Rr][0-9A-Za-z]? [0-9][ABD-HJLNP-UW-Zabd-hjlnp-uw-z]{2}";
  }
}

// This function verifies the 'password' and 'confirm passowrd' match
function checkPasswordMatch() {
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;
  if (password != confirmPassword) {
    //console.log("Password do not match");
    document.getElementById("message").innerHTML = "Passwords do not match";
    document.getElementById("submit").disabled = true;
  } else {
    //console.log("Passwords match");
    document.getElementById("message").innerHTML = "";
    document.getElementById("submit").disabled = false;
  }
}
