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
///////////////////////// WRITE YOUR CODE HERE /////////////////////////

}

/*
1. Prompt user for length of password (8-128 characters)
2. Prompt to inclue lowercase, uppercase, numeric, and/or special characters
3. cpu validates character types
4. generate password
5. Display password
*/