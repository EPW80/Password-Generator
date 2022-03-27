//Assignment Code
var generateBtn = document.querySelector("#generate");

//create object
var passwordCriteria = {

  passwordLength: 0, //property for length of password

  //array to store lowercase letters
  passwordLowerCase: ["a", "b", "c", "d", "e", "f", "g", "h",
    "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],

  //array to store upper case letters
  passwordUpperCase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K",
    "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],

  //array to store numbers
  passwordNumber: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],

  //array to special characters
  passwordCharacter: ["!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",",
    "-", ".", "/", "\\", ":", ";", "<", ">", "=", "?", "@", "[", "]", "^", "_", "`", "{", "}", "|", "~"]
}

//write password to #password input in index.html
function writePassword() {
  var password = generatePassword(); //call function
  var passwordText = document.querySelector("#password"); //set passwordText to the textArea on index.html
  passwordText.value = password; //update with new password
}

//event listener to generate button
generateBtn.addEventListener("click", writePassword); //listen for click on password

//function that will handle generating a new password
function generatePassword() {

  //variable to collect user input
  var passLength = 0;
  var passUpperCase;
  var passLowerCase;
  var passNumbers;
  var passSpecialCharacters;
  var result = "";

  //initialize 
  passLength = 0;
  passwordCriteria.passwordLength = 0;
  result = "";

  //check length
  while (passLength < 8 || passLength > 128) {
    passLength = prompt("Please enter a password.\nPassword must be 8 to 128 characters. ");

    //if user cancels actions
    if (passLength === undefined) {
      return "Enter Your Password";
    }
    else {

      //if user enter an integer
      if (!isFinite(passLength)) {
        alert("Please select a number");
        return "Enter Your Password";
      }
      else {

        //if password meets length criteria
        if (passLength < 8 || passLength > 128) {
          alert("Your password must be between 8 and 128 characters. ");
          return "Enter Your Password";
        }
        else {

          //call to display prompts for criteria
          displayPrompt();

          //keep adding characters based on criteria until passwordLength is = to the length of user input
          while (passwordCriteria.passwordLength < passLength) {

            //if statement to make sure the user selects at least one of the criteria
            if (passLowerCase === false && passUpperCase === false && passNumbers === false && passSpecialCharacters === false) {
              alert("Please select either lowercase, uppercase, numbers or characters!")
              displayPrompt();
            }

            else {
              //if the user selected lowercase, uppercase, numbers or characters, there is still room to add characters then
              //randomly grab a criteria from their array and add it to the end of result 
              //update password length by 1

              if (passLowerCase === true && passwordCriteria.passwordLength < passLength) {
                var lowerCase = passwordCriteria.passwordLowerCase[Math.floor(Math.random() * 26)]
                result = result + lowerCase;
                passwordCriteria.passwordLength++;
              }

              if (passUpperCase === true && passwordCriteria.passwordLength < passLength) {
                var upperCase = passwordCriteria.passwordUpperCase[Math.floor(Math.random() * 26)]
                result = result + upperCase;
                passwordCriteria.passwordLength++;
              }

              if (passNumbers === true && passwordCriteria.passwordLength < passLength) {
                var num = passwordCriteria.passwordNumber[Math.floor(Math.random() * 10)]
                result = result + num;
                passwordCriteria.passwordLength++;
              }

              if (passSpecialCharacters === true && passwordCriteria.passwordLength < passLength) {
                var passChar = passwordCriteria.passwordCharacter[Math.floor(Math.random() * 32)]
                result = result + passChar;
                passwordCriteria.passwordLength++;
              }
            }
          }
        }
      }
    }
    //return the generated password back to the calling function
    return result;

    //internal function to prompt the user for criteria required
    function displayPrompt() {
      lowerCase = confirm("Are you sure you want to use lower case letters?");
      upperCase = confirm("Are you sure you want to use upper case letters?");
      passNumbers = confirm("Are you sure you want to use numbers?");
      passSpecialCharacters = confirm("Are you sure you want to use any special characters?");
    }
  }
}