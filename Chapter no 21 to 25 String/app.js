// ========== chapter no 21 to 25 ==========
// ++++++++++ question no 1 ++++++++++++++

// var user1  = prompt("Enter your first name");
// var user2  = prompt("Enter your Second name");
// var greet = user1 + user2;
// console.log("Salam " + " " + user1 + " " +  user2);

// ============= question no 2 ============

// var userInput = prompt("Enter your favourite mobile");
// var res = userInput.length;
// console.log(userInput);
// console.log("Input lenght " + "" + res);

// ============= question no 3 ============

// var city = "pakistani";
// var chk = city.indexOf("n");
// document.write(chk);

// ============= question no 4 ============

// var word = "Hello World";
// var res = word.lastIndexOf("l");
// console.log(word);
// console.log( "index of l is " + "" + res);

// ============= question no 5 ============

// var city = "pakistani";
// var res = city.charAt(3);
// console.log(city);
// console.log("charactor at index 3 " + "" + res);

// ============= question no 7 ============

// var replace1 = "Hyder";
// console.log("before replace " + "Hyder")
// var res = replace1.replace("Hyder" , "hyderabad");
// console.log( "After replace " + "" + res);

// var replace1 = "Islam";
// console.log("before replace " + "Islam")
// var res = replace1.replace("Islam" , "Islamabad");
// console.log( "After replace " + "" + res);

// ============= question no 8 ============

// var message = "Ali and Sami are best friends. They play cricket and football together";
// var rep = message.replaceAll("and" , "&");
// console.log("before replace " + " " + message);
// console.log("After replace " + " " + rep);

// ============= question no 9 ============

// var str = parseInt("472");
// console.log("before str is string " + str)
// console.log( "after number " + typeof str);

// ============= question no 10 ============

// var word = "peanut";
// var res = word.toUpperCase();
// console.log( "user input lower case " + word);
// console.log( "user input change to upper case " + res);

// ============= question no 11 ============

// var word = "CRICKET";
// var res = word.toLowerCase();
// console.log( "user input upper case " + word);
// console.log( "user input change to lower case " + res);

// ============= question no 12 ============

// var num = 35.36 ;
// var str = num.toString();
// console.log(str);
// console.log(typeof str);
// var res = str.replaceAll("." , "");
// console.log(res);

// ============= question no 13 ============

// var user = prompt("enter your name");
// var flag = false;
// for (var i = 0; i < user.length; i++) {
//   var check = user.charCodeAt(i);
//   if (check == "33" || check == "44" || check == "46" || check == "64") {
//     flag = true;
//     break;
//   }
// }
// if (flag) {
//   console.log(
//     "Please enter a valid username without special characters (@, ., !)"
//   );
// } else {
//   console.log("Valid username entered: " + user);
// }


// ============= question no 14 ============
//  var pro = prompt("what to do want to be a order" , "cake , apple pie , cookie , chips , patties");
//  var arr = ["cake", "apple pie", "cookie", "chips", "patties"];
//  var flag = false;
//  var len = pro.toLowerCase();
//  for (var i = 0; i < arr.length; i++){
//     if(arr[i].toLowerCase() == len){
//         flag = true;
//         break

//     }
//  }
//  if(flag){
//     console.log(pro + " " + "is availble in array")
//  } else {
//     console.log(pro + "" + "is not avaibe for array")
//  }


// ============= question no 15 ============

// var password = prompt("enter your password");
// var valid = false;

// if (password.length < 6){
//     console.log("password must be contain al least 6 letter")
// } else if (!isNaN(password.charAt(0))){
//     console.log("pasword  staring value is must be number")
// } else {
//     var hasLetter = false;
//     var hasNumber = false;
//     for (var i=0; i<password.length; i++){
//         var charCode = password.charCodeAt(i)
//         // for checking password letter (A TO Z && a to z)
//         if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)){
//             hasLetter = true;
//         }else if (charCode >= 48 && charCode <= 57 ){
//             hasNumber = true;
//         }
//     }
// }
//  if (hasLetter == hasNumber){
//     valid = true;
//     console.log("password is correct")
//  } else {
//     console.log("password must be contain at leat one number one capital ya samll letter");
//  }

// ============= question no 16 ============

// var str = "university in karachi";
// var arr = str.split(" ");

// for (var i=0; i < arr.length; i++){
//     console.log(arr[i])
// }

// ============= question no 17 ============

// var user = prompt("enter your city name");
// var res = user.charAt(user.length - 1);
// console.log(res);

// ============= question no 18 ============

var str = "The quick brown fox jumps over the lazy dog";
var normalizedStr = str.toLowerCase(); // Convert to lowercase
var words = normalizedStr.split(" "); // Split string into words

var count = 0; // Initialize count to 0

// Loop through the words to count occurrences of "the"
for (var i = 0; i < words.length; i++) {
    if (words[i] === "the") {
        count++; // Increment count if the word is "the"
    }
}

console.log("Occurrences of 'the': " + count); // Output the count





