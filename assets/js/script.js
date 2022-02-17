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
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var special = ["!", "@", "?", "#", "%", "^", "&", "*", "~" ];

var generatePassword = function() {
  console.log("You clicked the button");
  
  // ask user for the length of the desired password,must be >= 8 characters and <= 128 characters.
  var input1 = window.prompt("Please enter the desired character length(between 8 and 128 characters) of your password to be generated.");
 // write a conditional statement to break out /stop function if user presses cancel, obviously generated password shows up regardless of button clicked
     // parseInt converts from string to number, radix is 10, it seems to work, not too sure why 
    console.log(input1 , "raw input" , typeof input1);
    if (input1 === null ) {
      return null;
   }
  
  else if (input1 >= 8 && input1 <= 128 ) {
    console.log(input1 +  " characters long ");
    var length = input1; 
   // var convertedString = parseInt(input1 , 10 );
    //console.log(convertedString);
   
    
   //if (typeof convertedString === Number &&  !isNaN(convertedString))
   //{

    
   } else {
    window.alert("You need to provide a valid integer from 8 thru 128!");
    return null;
   } 

    
    
   
  
  // code for second prompt that asks user if they want to include uppercase letters 
  
    var input2 = window.prompt("Do you want your password to include upper case letters? (type 'yes','Yes', or 'YES' for yes.  Click Cancel for no or leave box empty for no");
      if (input2 == null || input2 == "") {
        console.log ("You selected that you do not want UPPERCASE letters");
      }
      else if (input2 == "yes" || input2 == "Yes" || input2 == "YES") {
        console.log("You selected that you want UPPERCASE letters");
      }
    

  // code for third prompt that asks user if they want to include lower case letters

  // code for fourth prompt that asks user if they want to include numbers/integers

  // code for fifth prompt that asks user if they want to inlcude special characters


// placeholder for returned generated password here, later will be actual generated password.
  return "generated password";
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