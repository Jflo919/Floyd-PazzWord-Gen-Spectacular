// Assignment code here

// psuedocode begins here, acceptance criteria:

// password generator must contain the following conditions:

// more than one prompt must appear after clicking button

// first prompt should ask for the length of desired password, then a length >= 8 characters and <= 128 characters.

// next prompt should ask user for character types.

// then, user confirms whether they want to include lowercase, uppercase, numeric, and/or special characters via four additional prompts.

// When the user answers each prompt, their input should be validated and at least one character type should be selected.

// when all prompts are answered, then a password is generated, then the password is either displayed in an alert or written to the page.

// lookout for the following edge cases: if the user does not input anything into the field, user inputs a character number that is lower than 8 or greater than 128 should produce a window.alert or message of invalid response, please try again.
// 

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]; 

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);