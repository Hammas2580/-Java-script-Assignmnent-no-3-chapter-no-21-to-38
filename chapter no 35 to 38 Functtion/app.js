// ====================== chapter no 35 to 38 Function  =====================
//  ======================= Question no 01 ==============================

// var currentTime = () => {
//   var CurrentDate = new Date();
//   return CurrentDate;
// };
// document.write(currentTime());

//  ======================= Question no 02 ==============================

// let greetingMess = () => {
//     let user1 = document.getElementById("user1").value;
//     console.log(user1);
//     let user2 = document.getElementById("user2").value;
//     console.log(user2);
//     let user3 = document.getElementById("user2").value = "Salam";
// }

//  ======================= Question no 03 ==============================

// function myfun() {
//     let user1 = Number(prompt("Enter your first number"));
//     let user2 = Number(prompt("Enter your second number"));

//     let res = user1 + user2;

//     return res;
// }

// console.log(myfun());

//  ======================= Question no 04 ==============================

// let user1 = Number(prompt("Enter your fisrt number"));
// let operator = prompt("Enter your operator + * / * ");
// let user2 = Number(prompt("Enter your second number"));

// function calculate(user1,operator,user2){
//     let res;
//     if (operator == "+"){
//         res =  user1 + user2
//     }  else if (operator == "-"){
//         res = user1 - user2;
//     }
//     else if (operator == "*"){
//         res = user1 * user2;
//     }
//     else if (operator == "/"){
//         res = user1 / user2;
//     }
//     else if (operator == "%"){
//         res = user1 % user2;
//     }
//     else {
//         alert("invalid operator")
//     }
//     return res;

// }

// console.log(calculate(user1,operator,user2));

//  ======================= Question no 05 ==============================

// let user =Number(prompt("Enter your number"));
// function mufun(user1){
//     let squre = user  * user;
//     return squre;
// }
// console.log(mufun(user));

//  ======================= Question no 06 ==============================

// let user = Number(prompt("Enter your start number"));
// let user1 = Number(prompt("Enter your end number"));

// function myfun(){
//     for(var i = 0; i <= 5; i++){
//         console.log(i)
//     }
// }
// console.log(myfun())

// function countNumbers(start, end) {
//     for (let i = start; i <= end; i++) {
//         document.write(i + ": ");

//         // for (let j = 1; j <= i; j++) {
//         //     document.write(j + " ");
//         // }

//         // document.write("<br>");
//     }
// }

// let start = Number(prompt("Enter the start number:"));
// let end = Number(prompt("Enter the end number:"));

// countNumbers(start, end);

//  ======================= Question no 07 ==============================

// let base  = Number(prompt("Enter your number"));
// let perpendicular  = Number(prompt("enter ypur second number"));

// function calculateSqaure(base,perpendicular){
//     let cal = base + perpendicular;
//     return cal;
//     function calculatehypotense(){
//         let hypo =
//     }
// }
// console.log(calculateSqaure(base,perpendicular));

// function calculatehypotense(){
//     let base = Number(prompt("Enter your base of the traiangle"));
//     let perpendicular = Number(prompt("Enter your perpendicular of the traiangle"));
//     function calculateSqaure(number){
//         return  number * number
//     }

//     let baseSqaure = calculateSqaure(base);
//     let perpendicularSqaure = calculateSqaure(perpendicular);

//     let hypotenSquare = baseSqaure + perpendicularSqaure;
//     let hypotense = Math.sqrt(hypotenSquare);
//     console.log(hypotense)

// }
// calculatehypotense()

//  ======================= Question no 09 ============================

// let width = 5;
// let height = 10;

// function calculateArea(width,height){
//     let area = width * height;
//     return area;

// }
// console.log(calculateArea(width,height));

// function calculateArea1(width,height){
//     let final = width * height;
//     return final

// }

// console.log(calculateArea1(5,10));

//  ======================= Question no 10 ============================

// let check = "A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam.";
// function chk(a){
//     let rev = check.revserse();
//     console.log(rev);

// }
// chk(a);

// let word = "pakistan";

// function chk(a){
// let rev = a.split("").reverse().join("");

// if(rev === word){
//     console.log("is its true")
// } else {
// console.log("its is fales")
// }
// }
// chk(word);

//  ======================= Question no 11 ============================

// let myName = "my name is hammas";

// function myfun(str){

//     let result = " ";
//     let capitalizeWord = true;

//     for (let i = 0; i < str.length; i++){
//         let char = str[i];
//         console.log(char);

//         if (char == " "){
//             capitalizeWord = true;
//             result += char;
//             console.log(capitalizeWord)
//         } else if (capitalizeWord && char >= "a" && char <= "z"){
//             result += String.fromCharCode(char.charCodeAt(0) - 32);
//             capitalizeWord = false;

//         } else {
//             result += char;
//             capitalizeWord = false;
//         }
//     }
//     return result;

// }

// console.log(myfun(myName));

//  ======================= Question no 14 ============================
// //   calculate radius
// let radius = Number(prompt("Enter your radius value"));
// function calcCircumference(find){
//     let circumfernce = (2 * 3.142 * find);
//     return circumfernce;
// }

// console.log( "The is circumfernce is " + calcCircumference(radius));

// // calculate area

// let calclateArea = Number(prompt("Enter your area value"))
// function calculateArea(finda){
//     let area = (3.142 * finda * finda);
//     return area;

// }
// console.log("The area is " + calculateArea(calclateArea))

//  ======================= Question no 13 ============================

// function calculate(str , letter){
//     let count = 0;
//     for(let i = 0; i < str.length; i++){
//         if (str[i] === letter){
//             count++
//         }

//     }
//     return count;

// }

// console.log(calculate("'JSResourceS.com'," , "o"))

//  ======================= Question no 12  ============================

// function check(str){
//     console.log(str)
//     let  word = str.split(" ");
//     console.log(word);
//     let longestWord = "";
//     for( let i = 0; i < word.length; i++ ){
//         if (word[i].length > longestWord.length ){
//             longestWord = word[i];
//             console.log(longestWord)
//         }
//     }
//      return longestWord

// }
// console.log(check("web development tutorial"))

function word(str) {
  let word1 = str.split(" ");
  let longestWord = "";
  for (let i = 0; i < word1.length; i++) {
    if (word1[i].length > longestWord.length) {
      longestWord = word1[i];
    }
  }
  return longestWord;
}
let res = word("my name is hammas");
console.log(res);
