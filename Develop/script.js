// Assignment Code
const specialCharacters = "!@#$%^&*()";
const generateButton = document.getElementById('generateBtn')
generateButton.addEventListener('click', writePassword)

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var passwordLength = prompt("Enter the number of characters as your passwork length:");
  var numbers = confirm("Would you like to have numbers in your password?");
  var lowercases = confirm("Would you like to have lowercases in your password?");
  var uppercases = confirm("Would you like to have upeer in your password?");
  var special = confirm("Would you like to have special characters in your password?");
  
  var minimumCount = 0;
  var minimumNumbers = "";
  var minimumLowercases = "";
  var minimumUppercases = "";
  var minimumSpecialcharaters = "";

  var functionArray = {
    getnumbers: function(){
      return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
    },
    getlowercases: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
    },
    getuppercases: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
    },
    getspecial: function() {
      return specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
    }
  };
  
  if (numbers === true) {
    minimumNumbers = functionArray.getnumbers();
    minimumCount++;
  }
  if (lowercases === true) {
    minimumLowercases = functionArray.getlowercases();
    minimumCount++;
  }
  if (uppercases === true) {
    minimumUppercases = functionArray.getuppercases();
    minimumCount++;
  } 
  if (special === true) {
    minimumSpecialcharaters = functionArray.getspecial();
    minimumCount++;
  }

  var randomPasswordgenerated = "";
  for (let i=0; i<(parseInt(passwordLength) - minimumCount); i++) {
    var randomnumberselected = Math.floor(Math.random() * 4);
    randomPasswordgenerated += randomnumberselected;
  }

  randomPasswordgenerated += minimumNumbers;
  randomPasswordgenerated += minimumLowercases;
  randomPasswordgenerated += minimumUppercases;
  randomPasswordgenerated += minimumSpecialcharaters;

  return randomPasswordgenerated;

}

