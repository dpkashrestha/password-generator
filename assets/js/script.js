// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


function generatePassword() {
  var generatedPassword;
  var passwordLength;

  var invalidPasswordLenth = true;

  // repeat until valid password length is provided
  while (invalidPasswordLenth) {
    passwordLength = prompt(
      "Password Length - Enter the length of password between at least 8 characters and no more than 128 characters:"
    );

    if (passwordLength == null) {
      return;
    }
    
    // user input validation 
    if (
      typeof passwordLength == "string" ||
      passwordLength < 8 ||
      passwordLength > 128
    ) {
      alert("Error: Please enter a valid number between 8 to 128.");
    } else {
      invalidPasswordLenth = false;
    }
  }

  var lowercase;
  var uppercase;
  var numeric;
  var specialChar;
  var validCharType;

  var invalidCharType = true;
  
  // repeat until atleast one character type is selected
  while (invalidCharType) {
    lowercase = confirm(
      "Character Type - Do you want to include Lowercase characters?"
    );
    uppercase = confirm(
      "Character Type - Do you want to include Uppercase characters?"
    );
    numeric = confirm(
      "Character Type - Do you want to include Numeric characters?"
    );
    specialChar = confirm(
      "Character Type - Do you want to include Special characters?"
    );

    // user input validation 
    validCharType = lowercase || uppercase || numeric || specialChar;

    if (validCharType) {
      invalidCharType = false;
    } else {
      alert("Error: At least one character type should be selected.");
    }
  }

  // TODO write logic to build the password


  return generatedPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);