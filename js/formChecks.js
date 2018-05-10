// Mahsa Dilmaghani
// Form validation and verification checks

// This function validates the poscodes for US or UK upon selected
function validatePostCode() {
  var countrySelectElem = document.getElementById('country');
  var countryValue = countrySelectElem.options[countrySelectElem.selectedIndex].value;

  if (countryValue == 'US') {
    document.getElementById('postcode').pattern = "(\d{5}([\-]\d{4})?)";
  }
  else if (countryValue == 'UK') {
    document.getElementById('postcode').pattern = "[A-Za-z]{1,2}[0-9Rr][0-9A-Za-z]? [0-9][ABD-HJLNP-UW-Zabd-hjlnp-uw-z]{2}";
  }
};

// This function verifies the password and confirm passowrd match
function checkPasswordMatch() {
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;
  if (password != confirmPassword) {
    //console.log("Password do not match");
    document.getElementById("message").innerHTML = "Passwords do not match";
    document.getElementById('submit').disabled = true;
  } else {
    //console.log("Passwords match");
    document.getElementById("message").innerHTML = "";
    document.getElementById('submit').disabled = false;
  }
};



/*function errorMessage() {
  //var isvalid = true;
  document.getElementById("f_error_msg").innerHTML = '';
  var firstName = document.getElementById("firstName").value;

  if (firstName == null || firstName == "") {
    //document.getElementById("f_error_msg").style.display = "block";
    document.getElementById("f_error_msg").innerHTML = "Please enter First Name";
    document.getElementById('submit').disabled = true;
  }

};*/
