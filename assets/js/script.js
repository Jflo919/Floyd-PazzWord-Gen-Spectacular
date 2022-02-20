

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]; 
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 4, 5, 6, 7, 8, 9, 4, 3, 2, 1, 0, 0, 4, 56, 7, 11];
var special = ["!", "@", "?", "#", "%", "^", "&", "*", "~", "$", ">", "<", "/", "(", ")", "!", "@", "?", "#", ")", "%", "$" ];

var PROMPT_ONE = "Please enter the desired character length(between 8 and 128 characters) of your generated password.";
var PROMPT_TWO = "Do you want your password to include uppercase letters? (type 'yes' , 'YES' , or 'Yes' for yes.  Click Cancel for no or leave box empty for no)";
var PROMPT_THREE = "Do you want your password to include lowercase letters? (type 'yes' , 'YES' , or 'Yes' for yes.  Click Cancel for no or leave box empty for no)";
var PROMPT_FOUR = "Do you want your password to include integers? (type 'yes' , 'YES' , or 'Yes' for yes.  Click Cancel for no or leave box empty for no)";
var PROMPT_FIVE = "Do you want your password to include special characters? (type 'yes' , 'YES' , or 'Yes' for yes.  Click Cancel for no or leave box empty for no)";

var generatePassword = function() {
  var finalPassword = '';
  var passwordCharacterOptions = [];
  var desiredPasswordLength;

 // ask user for the length of the desired password, must be >=8 characters and <= 128 characters.
  
  
  var promptOneResponse = window.prompt(PROMPT_ONE);
 //  conditional statement to break out /stop function if user presses cancel, obviously generated password shows up regardless of button clicked
      
    if (promptOneResponse === null ) {
      return null;
   }
  
  else if (promptOneResponse >= 8 && promptOneResponse <= 128 ) {
    desiredPasswordLength = promptOneResponse;
   
   } else {
    window.alert("You need to provide a valid integer from 8 thru 128!");
    return null;
   } 

   // code for second prompt that asks users if they want to include uppercase letters 
 var promptTwoResponse = window.prompt(PROMPT_TWO);
 if (promptTwoResponse == "yes" || promptTwoResponse == "Yes" || promptTwoResponse == "YES" || promptTwoResponse == "y"|| promptTwoResponse == "Y") {
   passwordCharacterOptions.push(upperCase);
   // check to see if this works
   console.log(passwordCharacterOptions);
 }  
 
 // code for third prompt that asks user if they want to include lower case letters
 var promptThreeResponse = window.prompt(PROMPT_THREE);
 if (promptThreeResponse == "yes" || promptThreeResponse == "Yes" || promptThreeResponse == "YES" || promptThreeResponse == "Y" || promptThreeResponse == "y") {
   passwordCharacterOptions.push(lowerCase);
   // check to see if this works or not
   console.log(passwordCharacterOptions);
 }
// code for fourth prompt that asks user if they want to include integers in their password   
 var promptFourResponse = window.prompt(PROMPT_FOUR);
 if (promptFourResponse == "yes" || promptFourResponse == "Yes" || promptFourResponse == "YES" || promptFourResponse == "Y" || promptFourResponse == "y") {
   passwordCharacterOptions.push(numbers);
   // check to see if this works
   console.log(passwordCharacterOptions);
 }              
 var promptFiveResponse = window.prompt(PROMPT_FIVE);
 if (promptFiveResponse == "yes" || promptFiveResponse == "Yes" || promptFiveResponse == "YES" || promptFiveResponse == "Y" || promptFiveResponse == "y") {
   passwordCharacterOptions.push(special);
   // check to see if this works
   console.log(passwordCharacterOptions);
 }     
 // make sure user has to select at least one criteria
 if (promptTwoResponse === "" && promptThreeResponse === "" && promptFourResponse === "" && promptFiveResponse === "") {
   window.alert("You need to select at least one criteria for your password!");
   generatePassword();
 }

 // code to generate a random index and convert promptOneResponse to an integer, desired character length is still a string
 for (var i = 0; i <parseInt(promptOneResponse, 10); i++) {
   // creates a random number between 0 and 1, multiplied by the length of the passwordCharacterOptions array, this will be one of the two indexes used to generate the final password. 
   var typeIdx = Math.floor(Math.random() * passwordCharacterOptions.length);
   console.log(passwordCharacterOptions.length)
   var typeOptions = passwordCharacterOptions[typeIdx];
   var charIdx = Math.floor(Math.random() * typeOptions.length);
   finalPassword += passwordCharacterOptions[typeIdx][charIdx];
 }
  
  return finalPassword;
  }
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

        
