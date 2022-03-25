var generateBtn = document.querySelector("#generate"); //declare variable

var passwordCriteria = {
  passwordLength: 0,

  passwordLowerCase: ["a", "b", "c", "d", "e", "f", "g", "h",
    "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],

  passwordUpperCase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K",
    "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],

  passwordNumber: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],

  passwordCharacter: ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "/", "?", "<", ">", ";",
    "{", "}", "+", "-", "=", ",", "[", "]", ".", "\", "`"]
}


function writePassword() {
  var password = generatePassword(); //variable declaration
  var passwordText = document.querySelector("#password"); //variable declaration
  passwordText.value = password; //Return the value property
}

generateBtn.addEventListener("click", writePassword); //listen for click on password
function generatePassword() {
  var passLength = 0;
  var passUpperCase;
  var passLowerCase;
  var passNumbers;
  var passSpecialCharacters; 
  var result = "";

  passLength = 0;
  passwordCriteria.passwordLength = 0;
  result = "";

  while (passLength < 8 || passLength > 128) {
    passLength = prompt("Please enter the amount of characters that you would like your password to consist of. /nNote: Password must be 8 to 128 characters ");

    if (passLength === undefined ) {
      return "Enter Your Password";
    }
    else {
      
      if (!isFinite(passLength)) {
        alert("Please select a number");
        return "Enter Your Password";
      }
      else {
        if (passLength < 8 || passLength > 128) {
          alert("Your password must be between 8 and 128 characters. ");
          return "Enter Your Password";
        }
        else {
          displayPrompt();

         while (passwordCriteria.passwordLength < passLength) {
           
          if (passLowerCase === false && passUpperCase === false && passNumbers === false && passSpecialCharacters === false) {
            alert("Please select either lowercase, uppercase, numbers or characters)
            displayPrompt();
           }

           else {
             
            if (passLowerCase === true && passwordCriteria.passwordLength < passLength){
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
            var passChar = passwordCriteria.passwordCharacter[Math.floor(Math.random() * 26)]
            result = result + passChar;
            passwordCriteria.passwordLength++;
          }
         } 
        }
      }
    }
  }

  return result;

  function displayPrompt() {
    lowerCase = confirm("Are you sure you want to use lower case letters?");
    upperCase = confirm("Are you sure you want to use upper case letters?");
    passNumbers = confirm("Are you sure you want to use numbers?");
    passSpecialCharacters = confirm("Are you sure you want to use any special characters?");
  }
}
}
