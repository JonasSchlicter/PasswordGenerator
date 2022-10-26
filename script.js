// Assignment Code
var generateBtn = document.querySelector("#generate");
var length = 8;
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var special = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+'];
var num = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var promptArray = [];

// Write password to the #password input
function generatePassword() {
  var genPassword = "";
for(var i = 0; i < length; i ++) {
  var randomIndex = Math.floor(Math.random() * promptArray.length);
  genPassword = genPassword + promptArray[randomIndex];
}
return genPassword;
}

function getPrompt() {
  promptArray = [];
  length = parseInt(prompt("Choose a number of characters between 8 and 128."));
  if(isNaN(length) || length < 8 || length > 128) {
    alert("The value selected is invalid.");
    return false;
  }
  if(confirm("Would you like to include lowercase characters?")) {
    promptArray = promptArray.concat(lowercase);
  }
  if(confirm("Would you like to include uppercase characters?")) {
    promptArray = promptArray.concat(uppercase);
  }
  if(confirm("Would you like to include special characters?")) {
    promptArray = promptArray.concat(special);
  }
  if(confirm("Would you like to include numbers?")) {
    promptArray = promptArray.concat(num);
  }
  return true;
}

function writePassword() {
  var promptsTrue = getPrompt();
  var passwordText = document.querySelector("#password");
  if(promptsTrue) {
    var password = generatePassword();
    passwordText.value = password;
  }
  else {
    passwordText.value = "";
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
