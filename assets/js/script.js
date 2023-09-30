var generateBtn = document.querySelector("#generate");

// Generate password and write to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");
  var password = generatePassword();

  if (!!password) {
    passwordText.value = password;
  }
}

// Get user criteria and generate a random password based on it.
function generatePassword() {
  /*
   * Password length criteria
   */
  var passwordLength;
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
    return;
  }

  /*
   * Character type criteria
   */
  var addLowercase;
  var addUppercase;
  var addNumeric;
  var addSpecialChar;
  var validCharType;

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
  validCharType = addLowercase || addUppercase || addNumeric || addSpecialChar;

  if (!validCharType) {
    alert("Error: At least one character type should be selected.");
    return;
  }

  /*
   * Generate the random password
   */
  var generatedPassword = "";
  var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  var lowerChars = "abcdefghijklmnopqrstuvwxyz".split("");
  var numericChars = "0123456789".split("");
  var specialChars = " !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~".split("");

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
