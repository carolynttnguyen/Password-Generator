
//array of character types for user input
​var numericChar = ["0","1","2","3","4","5","6","7","8","9"];
var lowerCasedChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCasedChar = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var specialChar = ["U+0021","U+0022","U+0023","U+00214","U+0025","U+0026","U+0027","U+0028","U+00279","U+002A","U+002B","U+002C","U+002D","U+002E","U+002F","U+003A","U+003B","U+003C","U+003D","U+003E","U+003F","U+0040","U+005B","U+005C","U+005D","U+005E","U+005F","U+0060","U+007B", "U+007C","U+007D","U+007E"],

//Function to prompt character types, and store it in a variable
function passwordOpt (){
  //prompt 1: length of password
  var userInput = prompt("How many characters woulld you like your password to be?");
  //verirfy length
  var length = userInput
  if (length <8) {
    alert("Password character length needs to be at least 8 characters long!");

  }
  else if (length >128) {
    alert("Password character length cannot go past 128!");
    return;
  }

  //prompt 2
  var numericChar= confirm("Please Confirm additon of numeric characters in password.");
  if (numericChar === false) {
    alert("You must include numbers in your password.");
    return;
  }

  //prompt3
  var lowerCaseChar = confirm("Please Confirm additon of lowercase characters in password.");
  if (lowerCaseChar === false) {
    alert("You must include lowercase characters in your password.");
    return;
  }

  //prompt 4
  var upperCaseChar = confirm("Please Confirm additon of upper characters in password.");
  if (upperCaseChar === false) {
    alert("You must include uppercase characters in your password.");
    return;
  }
  //prompt 5
  var specialChar = confirm("Please Confirm additon of special characters in password.");
  if (specialChar === false) {
    alert("You must include special characters in your password.");
    return;
  }
  
  //Storing user inputs in a var
  var passwordOpt = {
    length: length, 
    numericChar: numericChar,
    lowerCaseChar: lowerCaseChar,
    upperCaseChar: upperCaseChar,
    specialChar: specialChar,
  };
}

// Function to grab random element from the array
function random(arr) {
  var charIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[charIndex];
  return randElement;
}

// Function to generate password with user input
function generatePassword() {
    //array to taking passwordOpt function and turning it into an varaible of use
    var options = passwordOpt();

    //variable to hold end result of generator
    var finalResult = [];
    
    // varaible to store types of characters to add to password from array 
    var possibleChar = [];

    // variable to grab characters from each array
    var Char = [];

    // Conditionals:takes array of each character type and adding it into var possible characters.  Then "pushes" the new characters to characters in passwords.
    if (options.numericChar) {
        possibleChar = possibleChar.concat(numericChar);
        Char.push(random(numericChar));
    }

    if (options.lowercaseChar) {
        possibleChar = possibleChar.concat(lowercaseChar);
        Char.push(random(lowercaseChar));
    }

    if (options.uppercaseChar) {
        possibleChar = possibleChar.concat(upercaseChar);
        Char.push(random(upercaseChar));
    }

    if (options.specialChar) {
        possibleChar = possibleChar.concat(specialChar);
        Char.push(random(specialChar));
    }


    // Noting the user's character length choice, and picking at random from the possible characters. Then "pushing" them to the final password result
    for (var i = 0; i < options.length; i++) {
      var possibleChar = random(possibleChar);

      finalResult.push(possibleChar);
    }

    // For loop to ensure character from each character type is included
    for (var i = 0; i < Char.length; i++) {
      finalResult[i] = Char[i];
    }
    //take string of password display to server
    return finalResult.join("");
}

//Assignment Code
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  
  passwordText.value = password;
}
 
// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);