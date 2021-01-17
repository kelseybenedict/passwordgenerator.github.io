// Assignment Code
var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = [0,1,2,3,4,5,6,7,8,9];
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "{", "}", "[", "]", "=", "<", ">", "/", ",", ".", "|", "~", "?"];
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var myArray = [];
  // Getting user input for the length of the password
  var userLength = Number(prompt("How many characters would you like this password to be?"));
  // If the user selects "cancel" (or selects OK with a null value), ask them again
  if (!userLength){
    return writePassword();
  }
  // Validating the user length
  else if (userLength < 8 || userLength > 128){
    alert("Please enter a valid number between 8 - 128");
    // Start function over again
    return writePassword();
  }
  // Getting user input to include numbers in password
  var includeNumbers = confirm("Do you want this password to include numbers?");
  if (includeNumbers){
    // If yes, store the numbers inside myArray
    myArray = myArray.concat(numbers);
    console.log("include numbers: ", myArray);
  }
  // Getting user input to include uppercase letters
  var includeUpper = confirm("Do you want this password to include uppercase letters?");
  // If yes, add uppercase letters to myArray
  if (includeUpper){
    myArray = myArray.concat(upperCaseLetters);
    console.log("include uppers: ", myArray);
  }
  var includeLower = confirm("Do you want this password to include lowercase letters?");
  if(includeLower){
    myArray = myArray.concat(lowerCaseLetters);
    console.log("include lowers: ", myArray);
  }
  // Getting user input to include special characters
  var includeChar = confirm("Do you want this password to include special characters?");
  if(includeChar){
    myArray = myArray.concat(specialChar);
    console.log("include special characters: ", myArray)
  }

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
