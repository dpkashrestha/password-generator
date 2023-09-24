// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  var passwordLength;
  var invalidPasswordLenth = true;

  // repeat until valid password length is provided
  while (invalidPasswordLenth) {
    passwordLength = prompt(
      "Password Length - Enter the length of password between at least 8 characters and no more than 128 characters:"
    );

    // exit when cancel is pressed in prompt dialog
    if (passwordLength == null) {
      return;
    }

    // user input validation
    if (passwordLength < 8 || passwordLength > 128) {
      alert("Error: Please enter a valid number between 8 to 128.");
    } else {
      invalidPasswordLenth = false;
    }
  }

  var addLowercase;
  var addUppercase;
  var addNumeric;
  var addSpecialChar;
  var validCharType;

  var invalidCharType = true;

  // repeat until atleast one character type is selected
  while (invalidCharType) {
    addLowercase = confirm(
      "Character Type - Do you want to include Lowercase characters?"
    );
    addUppercase = confirm(
      "Character Type - Do you want to include Uppercase characters?"
    );
    addNumeric = confirm(
      "Character Type - Do you want to include Numeric characters?"
    );
    addSpecialChar = confirm(
      "Character Type - Do you want to include Special characters?"
    );

    // user input validation
    validCharType =
      addLowercase || addUppercase || addNumeric || addSpecialChar;

    if (validCharType) {
      invalidCharType = false;
    } else {
      alert("Error: At least one character type should be selected.");
    }
  }

  var generatedPassword = "";
  var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  var lowerChars = "abcdefghijklmnopqrstuvwxyz".split("");
  var numericChars = "0123456789".split("");
  var specialChars = ["!","@","#","$","%","^","&","*","(",")","-","_","+","=","<",">","?","|","[","]","{","}",";",":",",",".","~",
  ];

  var selectedChars = [];

  // check character type user selection
  if (addLowercase) {
    selectedChars = selectedChars.concat(lowerChars);
  }

  if (addUppercase) {
    selectedChars = selectedChars.concat(upperChars);
  }

  if (addNumeric) {
    selectedChars = selectedChars.concat(numericChars);
  }

  if (addSpecialChar) {
    selectedChars = selectedChars.concat(specialChars);
  }

  // generate random password of user selected length
  for (var i = 0; i < passwordLength; i++) {
    generatedPassword = generatedPassword.concat(
      selectedChars[getRandomIndex(selectedChars.length - 1)]
    );
  }

  return generatedPassword;
}

function getRandomIndex(max) {
  return Math.floor(Math.random() * max); // Generates a random number between 0 and max
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
