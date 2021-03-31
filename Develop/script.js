// Assignment code here
//arrays of Uppercase, lowercase, characters numbers, special characters//

var upperCase = [ 'A',  'B',  'C',  'D',  'E',  "F",  'G',  'H',  'I',  'J',  'K',  'L',  'M',  'N', 'O',  'P',  'Q',  'R',  'S',  'R',  'U',  'V',  'W',  'X',  'Y',  'Z'];

var lowerCase = [  'a',  'b',  'c',  'd',  'e',  "f",  'g',  'h',  'i',  'j',  'k',  'l',  'm',  'n',  'o',  'p',  'q',  'r',  's',  't',  'u',  'v',  'w',  'x',  'y',  'z'];

var numbers = [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var specialCharacters = [ '@',  '%',  '+',  '\\',  '/',  "'",  '!',  '#',  '$',  '^',  '?',  ':',  ',',  ')',  '(',  '}',  '{',  ']',  '[',  '~',  '-',  '_',  '.'];



//function to randomize array indeces and to return the index value//

function shuffle (array) {
  var randomizeIndex = Math.floor(Math.random()*array.length); //if returned index 3 from upperCase
  var convertedElement = array [randomizeIndex] //then upperCase [3] = 'D'
  return convertedElement
  
}

//function to take in user input using prompts (how long the password is), confirm (uppercase lowercase or special characters)
//return those values

function userInput () {
  var passwordLength = parseInt (prompt("How long do you want to be?")); //convert to integer
  if (passwordLength < 8){
    alert('Password Must be at least 8 characters.')
    return
  }

  if (passwordLength > 128){
    alert('Password must be less than 128 characters.')
    return
  }
  
  var confirmUppercase = confirm("Would you like uppercase letters?"); //return booleans


  var confirmLowercase = confirm("Would you like lowercase letters?");

  var confirmnumbers = confirm("Would you like number letters?");

  var confirmSpecialcharacter = confirm("Would you like Specialcharacter letters?");
 
  var userChoices = {
    passwordLength: passwordLength,  //function keys to be called later (key: value) values come from userInput function
    confirmUpperCase: confirmUppercase,
    confirmnumbers: confirmnumbers,
    confirmSpecialcharacter: confirmSpecialcharacter,
    confirmLowercase: confirmLowercase,
  }
  console.log (userChoices);
  return userChoices;
}

//generate password function that takes in returned user input and applies at random arrays based on user input
function generatePassword () {
  var userOptions = userInput (); //example reference userOptions.confirmuppercase
  var newPassword = [];
  var possibleArray = [];


if (userOptions.confirmUppercase) {
  possibleArray = possibleArray.concat(upperCase);//if user says yes or no, if they say no skip if they say yes push a shuffled version of this selected array into the possiblearray(line 52)
  possibleArray.push (shuffle (upperCase));
}

if (userOptions.confirmLowercase) {
  possibleArray = possibleArray.concat(lowerCase);
  possibleArray.push (shuffle (lowerCase));
}

if (userOptions.confirmSpecialcharacter) {
  possibleArray = possibleArray.concat(specialCharacters);
  possibleArray.push (shuffle (specialCharacters));
}

if (userOptions.confirmnumbers) {
  possibleArray = possibleArray.concat(numbers);
  possibleArray.push (shuffle (numbers));
}

for (var i = 0; i < userOptions.passwordLength; i++) { //depending on user choice of how long the password will be, iterate over an index of possiblearray and shuffle it and then push it into new password array
  var readyPossibeArray = shuffle (possibleArray);
  newPassword.push (readyPossibeArray);
}
console.log (newPassword);
return newPassword.join(''); //return the newpassword array joined with no spaces
}




//returns randomized password






// Get references to the #generate element
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
