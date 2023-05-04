// Assignment code here

// Vars for special character for function
const lowercases = "abcdefghijklmnopqrstuvwxyz";
const uppercases = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const specialCharacters = "!@#$%^&*()";
const generateButton = document.getElementById("#generateBtn");

// function for prompt after click "Generate Password"
function generatePassword() {

    var passwordLength = prompt("Please enter the number of characters you want to have no less than 8 no more than 128");
    if (passwordLength < 8 || passwordLength > 128) {
        alert("Invalid, Must be between 8 - 128 characters!");
        return;
    }
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