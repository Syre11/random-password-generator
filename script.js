///////////////////////// DO NOT CHANGE ////////////////////////////////////
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // passwordText.value = password;
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
///////////////////////// DO NOT CHANGE ABOVE HERE /////////////////////////

function generatePassword() {
    var passLength = prompt("How long would you like the password to be? (8-128 characters)");
    passLength = Number(passLength)
    if (passLength < 8) {
      alert("Password is too short, must be at least 8 characters.")
      return;
    } else if (passLength > 128) {
      alert("Password is too long, must be 128 characters or less.");
      return;
    }  else {
      alert("Password is a valid length.")
    }
    var lowercase = confirm ("Would you like to include lowercase characters?")
    if (lowercase) {
      alert("Lowercase characters will be included.")
    } else {
      alert("Lowercase characters will NOT be included.")
    }
    var uppercase = confirm ("Would you like to include uppercase characters?")
    if (uppercase) {
      alert("Uppercase characters will be included.")
    } else {
      alert("Uppercase characters will NOT be included.")
    }
    var numeric = confirm ("Would you like to include numeric characters?")
    if (numeric) {
      alert("Numeric characters will be included.")
    } else {
      alert("Numeric characters will NOT be included.")
    }
    var special = confirm ("Would you like to include special characters?")
    if (special) {
      alert("Special characters will be included.")
    } else {
      alert("Special characters will NOT be included.")
    }
  
    var chars = ""
  
    if (lowercase) {
      chars += "abcdefghijklmnopqrstuvwxyz"
    } 
    if (uppercase) {
      chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    }
    if (numeric) {
      chars += "0123456789"
    }  
    if (special) {
      chars += " !#$%&'()*+,-./:;<=>?@[]^_`{|}~\u0022\u005c" 
    }  
    if (chars === "") {
      alert("At least one character type must be selected. Please try again.")
      return;
    }
  
    // console.log(passLength)
    // console.log(lowercase)
    // console.log(uppercase)
    // console.log(numeric)
    // console.log(special)
    // console.log(chars)
  
    var password = "";
    for (var i = 0, n = chars.length; i < passLength; i++) {
      password += chars.charAt(Math.floor(Math.random() * n))
    }
  
    console.log(password)
  
    //shows password in popup alert
    // window.alert(password)
  
    document.getElementById("password").innerHTML = password
}

/*
1. Prompt user for length of password (8-128 characters)
2. Prompt to inclue lowercase, uppercase, numeric, and/or special characters
3. cpu validates character types
4. generate password
5. Display password
*/