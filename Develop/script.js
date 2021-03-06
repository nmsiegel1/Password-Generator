var generateBtn = document.querySelector("#generate");

// Arrays for possible passowrd characters
var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var charactersArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "=", "~", "`", "?", "<", ",", ".", ">", "/", "|", ";", "'", "{", "}"];

// empty arrays

var resultArray = [];
var userArray = [];
var passwordLengthArray = [];

// function that selects number of characters for the password
  var writePassword = function () {
    passwordLengthArray = [];
    var passwordLength = window.prompt("How many characters would you like your password to be? Pick a number between 8 and 128.");
    passwordLength = parseInt(passwordLength);

    if(passwordLength < 8 || passwordLength > 128) {
      window.alert("Your password must be at least 8 and no more than 128 characters. Please try again.");
      writePassword();
    }else if (passwordLength >= 8 || passwordLength >= 128) {
      passwordLengthArray = passwordLengthArray.concat(passwordLength);
      // return passwordLength;
      characterSelections();
    }else {
      window.alert("You must enter your desired password length. Please try again.");
      writePassword();
    }
  };

  // function that selects types of characters in the password
var characterSelections = function() {
  resultArray = [];
  var promptUppercase = window.confirm ("Would you like uppercase letters in your password?");
  if (promptUppercase) {
    resultArray = resultArray.concat(uppercaseArray);
  }

  var promptLowercase = window.confirm ("Would you like lowercase letters in your password?");
  if (promptLowercase) {
    resultArray = resultArray.concat(lowercaseArray);
  }

  var promptNumbers = window.confirm ("Would you like numbers in your password?");
  if (promptNumbers) {
    resultArray = resultArray.concat(numArray);
  }

  var promptCharacters = window.confirm ("Would you like special characters in your password?");
  if (promptCharacters) {
    resultArray = resultArray.concat(charactersArray);
  }
  if (promptCharacters === false && promptNumbers === false && promptLowercase === false && promptUppercase === false) {
    window.alert("You must select at least one character type. Please try again.")
  }
  generatePassword();
};

// function that randomizes the password 
var generatePassword = function() {
  userArray = [];
  var passwordLength = passwordLengthArray[0];
  for (var i=0; i < passwordLength; i++) {
    userArray.push(resultArray[Math.floor(Math.random() * resultArray.length)]);
  }
  inputPassword();
};

// function that puts the completed password in the correct window for the user 
function inputPassword() {
  var password = userArray.join("");
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);