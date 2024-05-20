// --- String Operations / String Manipulations --- 
var data = "Hey everyone welcome to the world of Java Script"
console.log("Data :",data);

// 1. Lowercase 
console.log("Lower case :",data.toLowerCase());

// 2. Uppercase 
console.log("Upper case :",data.toUpperCase());

// ---Slice Operation---
console.log("Slice :",data.slice(2,12)); // Data doesnt get stored
//data = data.slice(2,12);               //  Data would be stored 
// console.log("Slice :",data);

// --- Length ---
console.log("Length :",data.length);

// --- Replace --
console.log("Replace :",data.replace("Hey", "Hi")); // (What value should be replace , What value you are expecting )
// data = data.replace("Hey" , "Hi");               
// console.log("Replace :",data);

// --- Includes ---
console.log("Includes :", data.includes("welcome"));
console.log("Includes :", data.includes("you"));

// --- Negative ---
var com = "Ramya"
console.log("Slice :",data.slice(8,-1));
console.log("Slice :",com.slice(2,-1));

// --- String to Number ---
var num = "12345";
console.log("String :",num);
console.log("Integer :",parseInt(num));

// --- Number to String ---
var m = 1234;
console.log("Number :",m);
console.log("String :",m.toString());

//--- Provides " , " according to the number value --  
var c = 17392164815;
console.log("String :",c.toLocaleString());

// --- Numbers consisting character and numbers---
var op = "3864agdj";
console.log("AlphaNumeric :",op);
console.log("Gives only Numbers :",parseInt(op));

var mp = "sgga26452";
console.log("AlphaNumeric :",mp);
console.log("Not a Number :",parseInt(mp));

var k = "sjjag1372mjz";
console.log("String values first :",k);
console.log("String values first :",parseInt(k));

var w = "11324sjai2373";
console.log("Numbers values first :",w);
console.log("Numbers values first :",parseInt(w));

// --- Split Operator ---
// split operator works with d-limiter --- here d-limiter is space 
var demo = "Good Morning";
console.log("Demo :",demo);
console.log("Demo :",demo.split(" ")); 
console.log("Demo :",demo.split("o"));

// --- Objects ---
var details = {
    Name : "Ravali",
    Age : 20,
    Course : "Bsc Honors",
    College : "St Francis College For Women"
};
console.log(details);
console.log(details.Name); // Get only Name as output 
console.log(Object.keys(details)); // To get only keys 
console.log(Object.values(details)); // To get only values
details.Name = "Mikky"; // To update the values 
console.log(details);

// --- Arrays ---
