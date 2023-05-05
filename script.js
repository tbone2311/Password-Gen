// Assignment Code

var generateBtn = document.querySelector("#generate");

// Speical characters for the function

const lowercases = "abcdefghijklmnopqrstuvwxyz";
const uppercases = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const specialCharacters = "!@#$%^&*()";
const generateButton = document.getElementById("#generateBtn");

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);

// Write password to the #password input

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

// Prompts after click "Generate Password"

function generatePassword() {

    var passwordLength = prompt("Please enter the number of characters you want to have no less than 8 no more that 128");
    if (passwordLength < 8 || passwordLength > 128) {
        alert("Invalid, Must be between 8 - 128 characters!");
        return;
    }

    var lowercases = confirm("Do you want lowercases in the password?");
    var uppercases = confirm("Do you want uppercases in the password?");
    var numbers = confirm("Do you want numbers in the password?");
    var special = confirm("Do you want special characters in the password?");

    // Minimum count for lowercase, uppercase, numbers, and special characters

    var minimumCount = 0;
    var minimumLowercases = "";
    var minimumUppercases = "";
    var minimumNumbers = "";
    var minimumSpecialCharacters = "";

    // Function Generator

    var functionArray = {
        getLowerCases: function() {
            return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
        },
        getUpperCases: function() {
            return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
        },
        getNumbers: function() {
            return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
        },
        getSpecialCharacters: function() {
            return specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
        }
    };

    // Checks the user if they selected "Ok" for all and uses the empty minimums

    if (lowercases === true) {
        minimumLowercases = functionArray.getLowerCases();
        minimumCount++;
    }
    if (uppercases === true) {
        minimumUppercases = functionArray.getUpperCases();
        minimumCount++;
    }
    if (numbers === true) {
        minimumNumbers = functionArray.getNumbers();
        minimumCount++;
    }
    if (special === true) {
        minimumSpecialCharacters = functionArray.getSpecialCharacters();
        minimumCount++;
    }

    // Empty Strings for the loop

    var randomPasswordGenerated = "";

    // Loop getting random characters

    for (let i = 0; i < (parseInt(passwordLength) - minimumCount); i++) {
        var randomNumberPicked = Math.floor(Math.random() * 5);
        randomPasswordGenerated += randomNumberPicked;
    }

    // Makes sure parameters are met 

    randomPasswordGenerated += minimumLowercases;
    randomPasswordGenerated += minimumUppercases;
    randomPasswordGenerated += minimumNumbers;
    randomPasswordGenerated += minimumSpecialCharacters;

    return randomPasswordGenerated;

}