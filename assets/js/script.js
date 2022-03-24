var generateBtn = document.querySelector("#generate"); //declare variable

//function Write password to the #password input
function writePassword() {
  var password = generatePassword(); //variable declaration
  var passwordText = document.querySelector("#password"); //variable declaration
  passwordText.value = password; //Return the value property
}

generateBtn.addEventListener("click", writePassword); //listen for click on password

// come up after user click generate password
function generatePassword() {
  var length = 8, //length of string
    charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+-*/", //set of characters to user
    retVal = ""; //empty
  for (var i = 0, n = charset.length; i < length; ++i) { //for loop to generate password
    retVal += charset.charAt(Math.floor(Math.random() * n)); //random generator
  }
  return retVal; //returnvalue
}