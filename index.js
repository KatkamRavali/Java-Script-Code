// --- Get String output on Console window  ---
console.log("Hello World");
// Output: Hello World

// ----- Get integer output on console window ---
console.log(123);
// Ouput: 123

// ---- Create a variable and update the variable ---
var age = 25;
console.log(age);
// Output: 25

age = 56;
console.log(age);
// Output: 56

// ---- Write a name and update it ---
var name = "Ravali";
console.log(name);
// Ouput: Ravali

name = "mikky";
console.log(name);
// Ouput: mikky

// --- Bollean data type --
var isYoung = true;
console.log(isYoung);
// Output: true

// --- if u wanna show anything on the output screen it should be written inside the double codes --
var name = "Rohan";
console.log("Name :", name);
// Output: Name : Rohan
var age = 36;
console.log("Age :", age);
// Output: Age : 36

// ---- Arrays ---
var student = ["abc", "xyz", "lmn"];
console.log(student); // displays all the values inside student
// Output: (3) ['abc', 'xyz', 'lmn']
console.log(student[0]); // displays the first value inside student
// Ouput: abc
console.log(student[1]); // displays the second value inside student
// Ouput: xyz
console.log(student[2]); // displays the thirs value inside student
// Output: lmn

//---- Objects --
var rohan = {
  Age: 10,
  firstName: "rohan",
  lastName: "Kinnal",
  Car: "nexon",
  HasABike: false,
};
console.log(rohan); // for all values
// Output: {Age: 10, firstName: 'rohan', lastName: 'Kinnal', Car: 'nexon', HasABike: false}
console.log(rohan.Age); // for single value
// Ouput: 10

// --- Const ---
const course = "Bsc Honors";
console.log(course);
// Ouput: Bsc Honors

// course = "Bcom Cap"
// Output: Unacceptable // error due to const is a fixed value

// --- String Operations / String Manipulations ---
var data = "Hey everyone welcome to the world of Java Script";
console.log("Data :", data);

// 1. Lowercase
console.log("Lower case :", data.toLowerCase());

// 2. Uppercase
console.log("Upper case :", data.toUpperCase());

// ---Slice Operation---
console.log("Slice :", data.slice(2, 12)); // Data doesnt get stored
//data = data.slice(2,12);               //  Data would be stored
// console.log("Slice :",data);

// --- Length ---
console.log("Length :", data.length);

// --- Replace --
console.log("Replace :", data.replace("Hey", "Hi")); // (What value should be replace , What value you are expecting )
// data = data.replace("Hey" , "Hi");
// console.log("Replace :",data);

// --- Includes ---
console.log("Includes :", data.includes("welcome"));
console.log("Includes :", data.includes("you"));

// --- Negative ---
var com = "Ramya";
console.log("Slice :", data.slice(8, -1));
console.log("Slice :", com.slice(2, -1));

// --- String to Number ---
var num = "12345";
console.log("String :", num);
console.log("Integer :", parseInt(num));

// --- Number to String ---
var m = 1234;
console.log("Number :", m);
console.log("String :", m.toString());

//--- Provides " , " according to the number value --
var c = 17392164815;
console.log("String :", c.toLocaleString());

// --- Numbers consisting character and numbers---
var op = "3864agdj";
console.log("AlphaNumeric :", op);
console.log("Gives only Numbers :", parseInt(op));

var mp = "sgga26452";
console.log("AlphaNumeric :", mp);
console.log("Not a Number :", parseInt(mp));

var k = "sjjag1372mjz";
console.log("String values first :", k);
console.log("String values first :", parseInt(k));

var w = "11324sjai2373";
console.log("Numbers values first :", w);
console.log("Numbers values first :", parseInt(w));

// --- Split Operator ---
// split operator works with d-limiter --- here d-limiter is space
var demo = "Good Morning";
console.log("Demo :", demo);
console.log("Demo :", demo.split(" "));
console.log("Demo :", demo.split("o"));

// --- Objects ---
var details = {
  Name: "Ravali",
  Age: 20,
  Course: "Bsc Honors",
  College: "St Francis College For Women",
};
console.log(details);
console.log(details.Name); // Get only Name as output
console.log(Object.keys(details)); // To get only keys
console.log(Object.values(details)); // To get only values
details.Name = "Mikky"; // To update the values
console.log(details);

// --- Operations [If u dont wanna store values ]---
// 1. Addition
var num1 = 10;
var num2 = 10;
console.log("Addition of Two Numbers :", num1 + num2);
// 2. Subtraction
var num1 = 10;
var num2 = 10;
console.log("Subtraction of Two Numbers :", num1 - num2);
// 3. Multiplication
var num1 = 10;
var num2 = 10;
console.log("Multiplication of Two Numbers :", num1 * num2);
// 4. Division
var num1 = 10;
var num2 = 10;
console.log("Division of Two Numbers :", num1 / num2);
// 5. Modulus
var num1 = 10;
var num2 = 10;
console.log("Modulus of Two Numbers :", num1 % num2);

// --- Operations [If u wanna store values ]---
// 1. Addition
var sum = num1 + num2;
console.log("Addition :", sum);
// 2. Subtraction
var sub = num1 - num2;
console.log("Subtraction :", sub);
// 3. Multiplication
var mul = num1 * num2;
console.log("Multiplication :", mul);
// 4. Division
var div = num1 / num2;
console.log("Division :", div);
// 5. Modulus
var mod = num1 % num2;
console.log("Modulus :", mod);

// --- Short Hand Abbrevations ---
// 1. Addition
var a = 3;
var b = 3;
console.log("Add :", (a += b));
// 2. Subtraction
var c = 2;
var d = 4;
console.log("Sub :", (c -= d));
// 3. Multiplication
var e = 4;
var f = 5;
console.log("Mul :", (e *= f));
// 4. Division
var g = 3;
var h = 5;
console.log("Div :", (g /= h));
// 5. Modulus
var i = 4;
var j = 4;
console.log("Mod :", (i %= j));

// --- Increment and decrement ---
// 1. Increment
// a. Post Increment [appended on next line ] : display fst then increment
var num3 = 5;
console.log("Given Values:", num3);
console.log("Before post increment :", num3++);
console.log("After post increment :", num3);
// we can also write in this ways
// num3 = num3 + 1 ; or num3 += 1;
// b. Pre Increment [appended on same line ] : increment fst then display
var num4 = 3;
console.log("Given Values:", num4);
console.log("Pre increment :", ++num4);
console.log("After pre increment :", num4);
// we can also write in this ways
// num4 = num4 + 1 ; or num4 += 1;
// 2. Decrement
// a. Post Decrement [appended on next line ]
var num5 = 9;
console.log("Given Values:", num5);
console.log("Before post decrement :", num5--);
console.log("After post decrement :", num5);
// we can also write in this ways
// num5 = num5 + 1 ; or num5 += 1;
// b. Pre Decrement [appended on same line ]
var num6 = 6;
console.log("Given Values:", num6);
console.log("Pre Decrement :", --num6);
console.log("After pre decrement :", num6);
// we can also write in this ways
// num6 = num6 - 1 ; or num6 -= 1;

// --- Comparison Operators ---
var num7 = 12;
var num8 = 12;
console.log(num7 == num8);
// a. Equals to
var num9 = 2;
var num10 = "2";
console.log(num9 == num10);
console.log(num9 === num10);
// b. Not Equals to
console.log("Not Equals to :", num7 != num8);
console.log("Not Equals to :", num9 != num10);
console.log("Not Equals to :", num9 !== num10);
// c. Not
var isCrt = false;
console.log(isCrt);
console.log(!isCrt);
// d. Greater than
var num11 = 5;
var num12 = 6;
console.log("Greater than or Not :", num11 > num12);
// e. Lesser than
console.log("Lesser than or Not :", num11 < num12);
// f. Greater than or euqal to
console.log("Greater than or equal to :", num11 >= num12);
// g. Lesser than or euqal to
console.log("Lesser than or equal to :", num11 <= num12);

// --- Compilation Operator ---
var age = 17;
if (age > 18) {
  console.log("Eligible to vote");
} else {
  console.log("Not Eligible to vote");
}

// --- Conditional Operator ---
age > 18
  ? console.log("Eligible to vote")
  : console.log("Not Eligible to vote");

// --- Functions ----
var obj1 = {
  name: "TVS",
  bikename: function () {
    console.log("This is bike name");
  },
};
console.log(obj1.name);
obj1.bikename();
// 1. Named Function
// With parameter
function add(a, b) {
  console.log(a + b);
}
add(2, 3); // Calling a function
// With out parameter
function con() {
  console.log("I am Named Function");
}
con();
// 2. Anonymous Function
// With parameters
var sum = function (a, b) {
  console.log(a + b);
};
sum(2, 5);
// Without parameters
var cont = function () {
  console.log("Hey I am Anonymous Function");
};
cont();
// 3. Arrow Function
// With parameters
var conts = (a, b) => {
  console.log(a + b);
};
conts(3, 1);

var conts = (a, b) => console.log(a + b);
conts(3, 1);
// Without parameters
var conte = () => {
  console.log("Hey this is Arrow function");
};
conte();

var conte = () => console.log("Hey this is Arrow function");
conte();

// --- Arrays Methodology / Methods ---
// 1. Map Method :
var cop = [1, 2, 3, 4, 5];
console.log("Array : ", cop);

var newArray = cop.map((text) => text + 2);
console.log("newArray is mapped with array:", newArray);
// Using { }
var newArrays = cop.map((text) => {
  return text * 2;
});
console.log("newArray is mapped with array:", newArrays);
// to get index values
var newName = cop.map((text, index) => console.log(text * 2, "=>", index));
// 2. Filter Method :
var newArray1 = cop.filter((text) => text <= 3);
console.log("Filter :", newArray1);
// Using if - statment
var newArray2 = cop.filter((text) => {
  if (text >= 3) return data;
});
console.log("Filter using if :", newArray2);
// 3. Find Method :
var newArray3 = newArrays.find((text) => text >= 4);
console.log("Find [Greater than] :", newArray3);

var newArray4 = cop.find((text) => text > 5);
console.log("Find :", newArray4);

var newArray4 = cop.find((text) => text < 5);
console.log("Find [Lesser than] :", newArray4);
// 4. Reduce Method :
var newWord = cop.reduce((accumulation, currentValue) => {
  return accumulation + currentValue;
}, 0);
console.log(newWord);
// Real-time example of Reduce
var filpcart = [
  {
    price: 200,
    quantity: 1,
  },
  {
    price: 200,
    quantity: 1,
  },
  {
    price: 500,
    quantity: 3,
  },
  {
    price: 200,
    quantity: 2,
  },
  {
    price: 1200,
    quantity: 1,
  },
];

var Cart = filpcart.reduce((accumulation, currentValue) => {
  return accumulation + currentValue.price * currentValue.quantity;
}, 0);
console.log("Total Amount :", Cart);

// --- Promises ---
var prom = new Promise((resolve, reject) => {
  resolve("Success - 1"), reject("Error Occurred - 2");
});

prom
  .then((succ) => {
    console.log("Example for Promises :", succ);
  })
  .catch((err) => {
    console.log("Example for Promises :", err);
  });
// To show the result late
var p = new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve("Success - 3");
  }, 1000);
  // reject("Error Occurred - 4");
});

p.then((succ) => {
  console.log("To delay result :", succ);
}).catch((err) => {
  console.log("To delay result :", err);
});
// To show which result comes first
var mon = new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve("Success - 5");
  }, 1000);

  setTimeout(function () {
    reject("Error Occurred - 6");
  }, 2000);
});

mon
  .then((suc) => {
    console.log("Which result comes first :", suc);
  })
  .catch((er) => {
    console.log("Which result comes first :", er);
  });
// When we write mutilple then conditions
var mo = new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve("Successed");
  }, 3000);

  setTimeout(function () {
    reject("Error Occurred");
  }, 4000);
});

mo.then((suc) => (suc = "Hey finally " + suc))
  .then((suc) => {
    console.log(suc);
  })
  .catch((er) => {
    console.log(er);
  });

// --- Async and Await ---
var myPromise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("Sucessful");
  }, 4000);
});

var getMyPromise = async () => {
  var getMyPromiseResult = await myPromise;
  console.log(getMyPromiseResult);
};

getMyPromise();
// Using try and catch block
var myPromises = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("Program is Sucessful");
  }, 5000);
});

var getMyPromises = async () => {
  try {
    var getMyPromiseResults = await myPromises;
    console.log(getMyPromiseResults);
  } catch (expection) {
    console.log(expection);
  }
};

getMyPromises();
// If u want to throw the error
var myPromisess = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("Program is Sucessful done");
  }, 7000);

  setTimeout(function () {
    reject("Errors occured");
  }, 6000);
});

var getMyPromisess = async () => {
  try {
    var getMyPromiseResultss = await myPromisess;
    console.log(getMyPromiseResultss);
  } catch (expection) {
    // throw new Error(expection);
    console.error(expection);
  }
};

getMyPromisess();
// Pending state
var myProm = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("Program is Sucessful completed");
  }, 9000);

  setTimeout(function () {
    reject("Check the Errors");
  }, 8000);
});

var getMyProm = () => {
  try {
    let getMyPromResult = myProm;
    console.log(getMyPromResult);
  } catch (expections) {
    // throw new Error(expection);
    console.log(expections);
  }
};

getMyProm();

// -------- Spread Operator -------
var mic = {
  name: "Ravali",
  age: 20,
};
console.log("Object :", mic);
console.log({ mic });
console.log({ ...mic }); // Example of Spread Operator
// To add something extra inside the spread operator
console.log({ ...mic, designation: "Student" });
// Updating Key value using spread operator
console.log({ ...mic, designation: "FullStack Developer" });

// ------ Date Operator ------
var date = new Date();
console.log(date);

// Each time we refresh the values get changed
var date = new Date();
console.log("Date-1 :", Date.now());
Math.floor("date :", date / (1000 * 60 * 60 * 24));
// Output : 19875 [Jan 1970 to till today]
// Days Since 1970-01-01
// There were 19875 days since January 1, 1970, the Unix epoch.

var date = new Date();
console.log("Date-2 :", Date.now());

var date = new Date();
console.log("Date-3 :", Date.now());

const dates = new Date("01/01/2024");
console.log(dates);

const dateInDays = new Date("01/01/2024");
Math.floor("Date In Day :", dateInDays / (1000 * 60 * 60 * 24));
console.log(dateInDays);
// Output : 19722
