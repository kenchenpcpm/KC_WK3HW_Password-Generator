// Assignment Code
var specialCharacters = "!@#$%^&*()";
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

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
    getNumbers: function(){
      return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
    },
    getLowercases: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
    },
    getuppercases: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
    },
    getSpecialcharacters: function() {
      return specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
    }
  };
  
  if (numbers === true) {
    minimumNumbers = functionArray.getNumbers();
    minimumCount++;
  }
  if (lowercases === true) {
    minimumLowercases = functionArray.getLowercases();
    minimumLowercases++;
  }
  if (uppercases === true) {
    minimumUppercases = functionArray.getUppercases();
    minimumUppercases++;
  } 
  if (special === true) {
    minimumSpecialcharaters = functionArray.getSpecialcharacters();
    minimumSpecialcharaters++;
  }

  var randomPasswordgenerted = "";
  for (let i=0; i<(parseInt(passwordLength) - minimumCount); i++) {
    var randomnumberselected = Math.floor(Math.random() * 4);
    randomPasswordgenerted += randomnumberselected;
  }

  randomPasswordgenerted += minimumNumbers;
  randomPasswordgenerted += minimumLowercases;
  randomPasswordgenerted += minimumUppercases;
  randomPasswordgenerted += minimumSpecialcharaters;

  return randomPasswordgenerted;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
