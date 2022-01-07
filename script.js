// Assignment Code
var generateBtn = document.querySelector("#generate");
var pwNumbers = [1,2,3,4,5,6,7,8,9,0]
var specialCharacters = [ "!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~", " ' ", " ", ' " ', "\\" ];
var pwLowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var pwUpperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let lengthOfPw = 0
var pwChoices = []
let pwResults = ""
function generatePassword(){ 
  while (parseInt(lengthOfPw)<8 || parseInt(lengthOfPw)>128){
    lengthOfPw = prompt("please enter password length between 8 and 128 characters")
     if (parseInt(lengthOfPw)<8 || parseInt(lengthOfPw)>128){
       lengthOfPw = prompt("that was not a valid choice! please enter a number between 8 and 128 characters")
     }
     else if (lengthOfPw == ""|| Number.isNaN(parseInt(passwordLength))){
      lengthOfPw = prompt("that was not a valid choice! please enter a number between 8 and 128 characters")
     }
  }
  var uppercase = confirm ("Do you want uppercase letters in your password? If YES click OK, if NO click cancel" )
  if (uppercase == true){
    pwChoices=pwChoices.concat(pwUpperCase)
    console.log(pwChoices)
  }
  var lowercase = confirm ("Do you want lowercase letters in your password? If YES click OK, if NO click cancel" )
  if (lowercase == true){
    pwChoices=pwChoices.concat(pwLowerCase)
    console.log(pwChoices)
  }
  var numbers = confirm ("Do you want numbers in your password? If YES click OK, if NO click cancel" )
  if (numbers == true){
    pwChoices=pwChoices.concat(pwNumbers)
    console.log(pwChoices)
  }
  var specialChar = confirm ("Do you want special characters in your password? If YES click OK, if NO click cancel" )
  if (specialChar == true){
    pwChoices=pwChoices.concat(specialCharacters)
    console.log(pwChoices)
  }
 var charset =pwChoices
 for (let i = 0,n=charset.length; i < parseInt(lengthOfPw); i ++ ){ 
  pwResults += charset[Math.floor(Math.random()*n)]
 }
  return pwResults
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
