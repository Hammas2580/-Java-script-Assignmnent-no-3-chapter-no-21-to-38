// ================ chapter no 31 to 34 Date method ====================
// ============== question no 1 ==============================

// var da = new Date();
// document.write(da);

// ============== question no 2 ==============================

// var mon = ["jan" , "feb" , "march" , "april" , "may" , "june" , "july" , "augest" , "september" , "october" , "november" , "december"];
// var now = new Date();
// var da = now.getMonth();
// var noOfDay = mon[da];
// console.log(noOfDay);

// ============== question no 3 ==============================

// let arr = [
//   "sunday",
//   "monday",
//   "tuesday",
//   "wednesday",
//   "thursday",
//   "friday",
//   "saturday",
// ];
// let da = new Date();
// let currentDay = da.getDay();
// let das = arr[3];
// console.log(das.slice(0,3).toUpperCase());

// ============== question no 4 ==============================

// var arr = [
//   "sunday",
//   "monday",
//   "tuesday",
//   "wednesday",
//   "thursday",
//   "friday",
//   "saturday",
// ];
// var da = new Date();
// var currentDate = da.getDay();
// var noOfDay = arr[currentDate];
// console.log(noOfDay);
// if (noOfDay == "saturday" || noOfDay == "sunday") {
//   console.log("its fun day");
// } else {
//   console.log("its not a fund day");
// }

// ============== question no 5 ==============================

// var da = new Date();
// var currentDay = da.getDate();
// console.log(currentDay);
// if (currentDay < 15){
//     console.log("First fifteen days of the month")
// } else {
//     console.log("Last days of the month");
// }

// ============== question no 6 ==============================

// var da = new Date("1970-01-01T00:00:00Z");
// console.log(da);
// var milliSecond = da.getTime();
// console.log(milliSecond);
// var minites = milliSecond  / (1000 * 60);
// console.log(minites);

// =============== question no 7 ===============================

// var da = new Date();
// var currentTime = da.getHours();
// console
// .log(currentTime);
// if (currentTime  <= 12){
//     console.log("its AM")
// } else if (currentTime > 12){
//     console.log("its PM")
// }

// =============== question no 8 ===============================

// var laterDate = new Date(2020, 11, 31); // December 31, 2020
// console.log(laterDate);

// =============== question no 9 ===============================

// var da = new Date();
// var current = da.getTime();
// var currentDate = new Date("18 june 2015");
// var totalDate = current - currentDate.getTime();
// console.log(Math.floor(totalDate / (1000 * 60 * 60 * 24)));


// =============== question no 10 ===============================


// var da =  new Date();
// var currentHours = da.getHours();
// console.log(currentHours);

// da.setHours(currentHours + 10)
// console.log(da)

// =============== question no 11 ===============================



// var da = new Date();
// var currentDate = da.getFullYear();
// console.log(currentDate);
// da.setFullYear(currentDate - 100);
// console.log(da);

// =============== question no 12 ===============================

// var age = prompt("Enter your age");
// var currentda = new Date();
// var currentYear = currentda.getFullYear()
// var birthYear = currentYear - age;   // 2024   -    20
// console.log("Your birth year is: " + birthYear);
