
var generateBtn = document.querySelector("#generate");


var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var specialCharacters = specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '[', ']', '{', '}', '|', '\\', ';', ':', "'", '"', '<', '>', ',', '.', '/', '?'];


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {

  var length = parseInt(prompt("Enter the desired length of the password between 8 and 128 characters:"));
  if (length < 8 || length > 128 || isNaN(length)) {
    alert("Please enter a password lenght between 8 & 128 characters");
    return generatePassword();
  }

  var lowercase_yesno = confirm("Include lowercase characters");
  var uppercase_yesno = confirm("Include uppercase characters");
  var numbers_yesno = confirm("Include numbers characters");
  var specialCharacters_yesno = confirm("Include Special Characters");

 
   if (!lowercase_yesno && !uppercase_yesno && !numbers_yesno && !specialCharacters_yesno) {
      alert ("Please select at least one character type");
      generatePassword();
    }
  
  var characterSet = []
  if (lowercase_yesno) {
    characterSet = characterSet.concat(lowercase)
  }
  if (uppercase_yesno) {
    characterSet = characterSet.concat(uppercase)
  }
  if (numbers_yesno) {
    characterSet = characterSet.concat(numbers)
  }
  if (specialCharacters_yesno) {
    characterSet = characterSet.concat(specialCharacters)
  }
  var password = '';
  for (var i = 0; i <length; i++) {
    var randomIndex = Math.floor(Math.random() * characterSet.length);
    password += characterSet[randomIndex];
  }
  return password;
}
generateBtn.addEventListener("click", writePassword);