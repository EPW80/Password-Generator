var generateBtn = document.querySelector("#generate"); //declare variable

var passwordCriteria = {
 passwordLength: 0,

 passwordLowerCase: ["a", "b", "c", "d", "e", "f", "g","h",
  "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],

 passwordUpperCase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K",
"L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],

}
//function Write password to the #password input
function writePassword() {
  var password = generatePassword(); //variable declaration
  var passwordText = document.querySelector("#password"); //variable declaration
  passwordText.value = password; //Return the value property
}

generateBtn.addEventListener("click", writePassword); //listen for click on password

//generate password
function generatePassword() {
  var length = 8,
      charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
      retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}
