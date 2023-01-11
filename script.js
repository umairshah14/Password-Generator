// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

var length = prompt("Please enter how many characters you would like your password to be, between 10 and 64");
console.log(length);
var upperyorn = confirm("Do you want to use upper-case letters");
console.log("Upper cases chosen?: " + upperyorn);
var loweryorn = confirm("Do you want to use lower-case letters");
console.log("Lower cases chosen?: " + loweryorn);
var specialyorn = confirm("Do you want to use special letters");
console.log("Special chars chosen?: " + specialyorn);
var numberyorn = confirm("Do you want to use numbers");
console.log("Numbers chosen?: " + numberyorn);

if (length < 10 || length > 64) {
  alert("Please enter a number between 10 and 64");
}

// Function to generate password with user input
function generatePassword() {
  // Initialize variables to store the password, and the number of character sets used

  console.log("PASSWORD GENERATOR FUNCTION STARTED");

  var password = "";
  var characterSetsUsed = 0;

  // Check that the desired length is between 10 and 64
  if (length < 10) {
    length = 10;
  } else if (length > 64) {
    length = 64;
  }

  // Loop until the password is of the desired length
  console.log("NOW ABOVE THE FOR LOOP");
  console.log("length is " + length);

  for (var i = 0; i < length; i++) {
    console.log("FOR LOOP ENTERED");
    // Choose a random character set
    var charSet = [];
    if (upperyorn) {
      charSet = charSet.concat(upperCasedCharacters);
    }

    if (loweryorn) {
      charSet = charSet.concat(lowerCasedCharacters);
    }

    if (specialyorn) {
      charSet = charSet.concat(specialCharacters);
    }

    if (numberyorn) {
      charSet = charSet.concat(numericCharacters);
    }

    var randomNum = Math.floor(Math.random() * charSet.length);

    // Add a random character from the chosen character set
    password += charSet[Math.floor(Math.random() * charSet.length)];

    console.log("the current password is: " + password);
    // Keep track of the number of character sets used
    if (randomNum > 0 && characterSetsUsed < 3) {
      characterSetsUsed++;
    }
  }
  console.log("FOR LOOP ENDED");
  return password;

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passwordfinal = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = passwordfinal;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
