var generateBtn = document.querySelector("#generate"); //declare variable

//function Write password to the #password input
function writePassword() {
  var password = generatePassword(); //variable declaration
  var passwordText = document.querySelector("#password"); //variable declaration
  passwordText.value = password; //Return the value property
}

generateBtn.addEventListener("click", writePassword); //listen for click on password

//  generate password
function generatePassword(){
    var length = window.prompt("choose password length between 8 and 128")
    char = "abcdefghijklmnopqrstuvwkyz"
    num = "1234567890"
    passwordText = [""]
     for(i=0;i < length; i++){
       passwordText += char.charAt(Math.floor(Math.random() * char.length))
       return passwordText
     }
    };