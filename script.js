var numericCharacters = ["0","1","2","3","4","5","6","7","8","9"];
var lowerCasedCharacters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCasedCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var specialCharacters = ["U+0021","U+0022","U+0023","U+00214","U+0025","U+0026","U+0027","U+0028","U+00279","U+002A","U+002B","U+002C","U+002D","U+002E","U+002F","U+003A","U+003B","U+003C","U+003D","U+003E","U+003F","U+0040","U+005B","U+005C","U+005D","U+005E","U+005F","U+0060","U+007B", "U+007C","U+007D","U+007E"];
function passwordOpt (){
  var userInput = prompt("How many characters woulld you like your password to be?");

  var length = userInput
  if (length <8) {
    alert("Password character length needs to be at least 8 characters long!");
  }
  else if (length >128) {
    alert("Password character length cannot go past 128!");
    return;
  }
  var hasNumericChar= confirm("Please Confirm additon of numeric characters in password.");
  if (hasNumericChar === false) {
    alert("You must include numbers in your password.");
    return;
  }
  var hasLowerCasedChar = confirm("Please Confirm additon of lowercase characters in password.");
  if (hasLowerCasedChar === false) {
    alert("You must include lowercase characters in your password.");
    return;
  }
  var hasUpperCasedChar = confirm("Please Confirm additon of upper characters in password.");
  if (hasUpperCasedChar === false) {
    alert("You must include uppercase characters in your password.");
    return;
  }
  var hasSpecialChar = confirm("Please Confirm additon of special characters in password.");
  if (hasSpecialChar === false) {
    alert("You must include special characters in your password.");
    return;
  }

  var passwordOpt = {
    length: length,
    hasSpecialChar: hasSpecialChar,
    hasNumericChar: hasNumericChar,
    hasLowerCasedChar: hasLowerCasedChar,
    hasUpperCasedChar: hasUpperCasedChar
  };

  return passwordOpt;
}
function random(arr) {
  var charIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[charIndex];
  return randElement;
}
function generatePassword() {
    var options = passwordOpt();
    var finalResult = [];
    var possibleCharacters = [];
    var guaranteedCharacters = [];
    if (options.hasNumericChar) {
        possibleCharacters = possibleCharacters.concat(numericCharacters);
        guaranteedCharacters.push(random(numericCharacters));
    }
    if (options.hasLowercaseChar) {
        possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
        guaranteedCharacters.push(random(lowerCasedCharacters));
    }
    if (options.hasUppercasedChar) {
        possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
        guaranteedCharacters.push(random(upperCasedCharacters));
    }
    if (options.hasSpecialChar) {
        possibleCharacters = possibleCharacters.concat(specialCharacters);
        guaranteedCharacters.push(random(specialCharacters));
    }    
    for (var i = 0; i < options.length; i++) {
      var possibleCharacters = random(possibleCharacters);
      finalResult.push(possibleCharacters);
    }

    for (var i = 0; i < guaranteedCharacters.length; i++) {
      finalResult[i] = guaranteedCharacters[i];
    }
    
    return finalResult.join("");
}
var generateBtn = document.querySelector("#generate");
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
generateBtn.addEventListener("click", writePassword);