// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Function to generate a password based on user criteria
function generatePassword() {
    var password = "";

    // Criteria
    var length = parseInt(prompt("Enter password length (between 8 and 128 characters):"));
    var includeLowerCase = confirm("Include lowercase letters?");
    var includeUpperCase = confirm("Include uppercase letters?");
    var includeNumeric = confirm("Include numeric characters?");
    var includeSpecial = confirm("Include special characters?");

    if (length < 8 || length > 128 || isNaN(length)) {
        alert("Invalid input. Password length must be between 8 and 128 characters.");
        return;
    }

    if (!(includeLowerCase || includeUpperCase || includeNumeric || includeSpecial)) {
        alert("Please select at least one character type.");
        return;
    }

    var lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    var upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numericChars = "0123456789";
    var specialChars = "!@#$%^&*()-=_+[]{}|;:',.<>?";

    var chars = "";
    if (includeLowerCase) chars += lowerCaseChars;
    if (includeUpperCase) chars += upperCaseChars;
    if (includeNumeric) chars += numericChars;
    if (includeSpecial) chars += specialChars;

    for (var i = 0; i < length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
