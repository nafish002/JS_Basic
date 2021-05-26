// var myName;
// var hisName = 'elsa';
// var x = 2 + 3;

// console.log(myName = 'jahid');
// console.log(hisName);
// console.log(x);
// //javascript variables name is caseSensitive myname and myName is not same here


// let message = 'this is my message';
// message = ' this is my another message ';//this value is change //possible to reasign the value
// // let message = 'this is message by let ';//its not possible to declare
// console.log(message);

// let hello;
// hello = message;//copy message by hello
// console.log(hello);

// var name = anotherName = 'ibn nafish';
// // name = 'jabir ibn hayan'
// console.log(name);
// console.log(anotherName);

// // global variable
// var messages = "Hello";
// function say() {
//     // local variable
//     var messages = 'Hi';
//     console.log(messages); // which message?
// }
// say();// Hi
// console.log(messages); // Hello

// var counter ;
// console.log(counter);
// counter = 22 ;

// // let cann't be declare outside of the block scope
// // var keyword can be decalre outside of the scope 
// //so always try to declare let avoid the clash
// //let can't work outside of the loop and block scope **

// var x = 11;
// {
//     var x = 3;//it's work out side of the scope
// }
// console.log(x);

// var x = 11;
// {
//     let x = 3;//let don't use outside of the block scope
// }
// console.log(x);

// function myFunction() {
//   var carName = "Volvo"; // Function Scope
//   console.log(carName);
// }
// myFunction();
// // console.log(carName);

// let counters = 120; // counter is a number
// console.log(typeof(counters)); // "number"

// counters = false;   // counter is now a boolean
// console.log(typeof(counters)); // "boolean"

// counters = "Hi";   // counter is now a string
// console.log(typeof(counters)); // "string"

// let s2 = Symbol("event.save");
// console.log(s2);
// console.log(s2.toString()); // Symbol(event.save)

// var x = 1e2;
// console.log(x);
// var y = 1e-4;
// console.log(y);

// let num =255;
// console.log(num.toString(16));

// var number = 23;
// var string = '12';
// console.log(Number(string));
// console.log(typeof(String(number)));

// var x = 10, y = 100, z = 1000;

// console.log(x.toExponential());
// console.log(y.toExponential());
// console.log(z.toExponential());

// // "1e+1"
// // "1e+2"
// // "1e+3"

// var myExponential = 4e5;
// console.log(myExponential);

// var myInte = 3.333;
// console.log(myInte.toFixed(2));
// console.log(myInte.toPrecision(2));

// var x =34;
// console.log(Number(String(x)));
// console.log(x.toString());
// console.log(x);

// var m =34.555;
// console.log(Math.ceil(m));
// console.log(Math.random(3));

// // var num = 23;
// //Math.floor/ceil/round/random/max/min
// //num.toString/toFixed/toPrecision/toExponential;    //those are method in javascript number
// //Number(var)/String(var_name)/Boolean(var_name)
// //typeof(Number(var_name))
// //typeof(String(Number(var_name)))
// //num.toString(2/16/26)
// //parseInt/parseFloat;

// //use of number method**
// // console.log(Math.pow(2, 3));
// // console.log(Math.max((23 , 45 ,65)));
// // var toFixed = 34.3434;
// // console.log(toFixed.toFixed(2));
// // console.log(toFixed.toPrecision(4));
// // console.log(toFixed.toExponential());
// // var string = 34;
// // console.log(Number(string.toString()));

// //*** use of string *** 

// // new line(/n) / quotes(/')/ tab(/t)/ 
// // always use backslash/ before [t,n,r,',",v(vartical tabulator)]

// // var test = 'i am '/ nafish /' ';
// // console.log(test);

// var str = "hello";
// console.log(str[2]);//get second index of the text
// console.log(str.charAt(2));//get second index of the text
// console.log(str[str.length - 1]);//last number

// // iterating over charecter using for..of 
// for (let variable_name of 'MBSTU'){
//     console.log(variable_name);
// }

// //change charecter of the text by its index number

// var string = 'hi';
// string = 'M' + string[1];
// console.log(string);

// //uppercase and lowercase
// var uppercase = 'hello';
// console.log(uppercase.toUpperCase());
// var lowercase = 'HELLO';
// console.log(lowercase.toLowerCase());

// //slice and splice
// var slice = 'helloWorld';
// console.log( slice.slice(0,3));
// console.log(slice.substr(2,4));
// console.log(slice.length);//for length we can use length;its generally use for iterating the string

// //find out index from the text
// var string = 'This is my another string';
// var anotherString = string.indexOf('another');
// console.log(anotherString);
// var mystring = 'this is my another string';
// var anotherstring = string.search('my');
// console.log(anotherstring);
// //search() or indexof()
// //slice(start,end) or substring(start,end) or substr(start, length);/replace()
// //replacing value from text of the variable
// var replace = 'this is nafish';
// var n = replace.replace('nafish', 'jahan')
// var b = replace.toUpperCase();
// console.log(n);
// console.log(b);
// //concat use to 

// var m = 'this is text';
// var a = ' for javascript';
// var z = m.concat("", a);
// console.log(z);


// //conditional statement

// var hour = 12;
// var greeting;
// if (hour < 18) {
//   greeting = "Good day";
// }
// console.log(greeting);

// var x = 3;
// if(x<5) console.log('Yes, This is true!');//one line statement there have not need any curly brackets

// let x1 = 5;
// if (x1 > 10) {
//   console.log("x is greater than 10");
// } else {
//   console.log("x is less than or equal 10");
// }


// //else if statement
// var time = 4;
// var greeting;
// if (time < 10) {
//   greeting = "Good morning";//we can use here console log without declaring var greeting;
// } else if (time < 20) {
//   greeting = "Good day";
// } else {
//   greeting = "Good evening";
// }
// console.log(greeting);

// // check if the number is positive
// // const number1 = prompt("Enter a number: ");
// // // check if number is greater than 0
// // if (number1 > 0) {
// //  // the body of the if statement
// //   console.log("The number is positive");
// // }
// // console.log("The if statement is easy");


// let a1 = 10,
//   b1 = 10;
// if (a1 > b1) {
//   console.log("a is greater than b");
// } else if (a1 < b1) {
//   console.log("a is less than b");
// } else {
//   console.log("a is equal to b");
// }//we can use switch statement insted of this condition or statement

// //we can also write it by else if statement
// // let age = prompt("age?", 18);
// // let message =
// //   age < 3
// //     ? "Hi, baby!"
// //     : age < 18
// //     ? "Hello!"
// //     : age < 100
// //     ? "Greetings!"
// //     : "What an unusual age!";

// // alert(message);

// var day = 1;
// // var dayName;
// switch (day) {
//     case 1:
//         console.log(dayName = 'Sunday');
//         break;
//     case 2:
//         dayName = 'Monday';
//         break;
//     case 3:
//         dayName = 'Tuesday';
//         break;
//     case 4:
//         dayName = 'Wednesday';
//         break;
//     case 5:
//         dayName = 'Thursday';
//         break;
//     case 6:
//         dayName = 'Friday';
//         break;
//     case 7:
//         dayName = 'Saturday';
//         break;
//     default:
//         dayName = 'Invalid day';
// }
// // console.log(dayName); // Tuesday


// var year = 2016;
// var month = 2;
// var dayCount;
// switch (month) {
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//         dayCount = 31;
//         break;
//     case 4:
//     case 6:
//     case 9:
//     case 11:
//         dayCount = 30;
//         break;
//     case 2:
//         if (((year % 4 == 0) && !(year % 100 == 0))
//             || (year % 400 == 0))
//             dayCount = 29;
//         else
//             dayCount = 28;
//         break;
//     default:
//         dayCount = -1; // invalid month
// }

// console.log(dayCount); // 29


// //loop 
// // while(1){
// //     console.log('this is falsy statement');
// // }


// // array

// //there have two syntax for array 
// let array = new Array("a", "b", "c");
// console.log(array);
// let arr = ["a", "b", "c"];
// console.log(arr);

// arr[3]='my new text';//include new index into the array
// arr[3]='for test'//also change the text of the array
// console.log(arr);
// console.log(arr[2]);
// console.log(arr.length);

// let arr1 = [
//   "Apple",
//   { name: "John" },
//   true,
//   function () {
//     alert("hello");
//   },
// ];
// console.log(arr1[3]);
// //also know about push, pop, unshift, shift


// //loops
// //these three types of loop/iteration is same for array
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);//alert(arr.[i]);
// }

// for (let newArray of arr){
//   console.log(newArray);
// }

// for (let anotherArray in arr){
//   console.log(anotherArray);
// }//we get here index number of the array 
// for (let anotherArray in arr){
//   console.log(arr[anotherArray]);
// }//we get here value of the array 
// //always try to use for..of because here don't use index of the array so its easy to use

// //splice
// var splice = arr.splice(1,2);
// console.log(splice);//we can cut data from array
// arr.splice(1,2,'nafish','sobuj');//we can change data from array
// console.log(arr);
// //slice, concat, forEach, indexof, find, filter, map, sort, reverse, split, join , reduce

// let concat = arr.concat(['jahan']);
// console.log(concat);

// let index = arr.indexOf('nafish');
// console.log(index);

// //how to check a value in array 
// console.log(Array.isArray(arr));//get true or false

// // ["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
// //   alert(`${item} is at index ${index} in ${array}`);
// // });

// arr.forEach((item,index,array)=> {
//   console.log(`${item} is at index ${index} in ${array}`);
// });//those are the place of item index and array .we can change their name as our wish 
// //we can use find, filter, map, sort,  etc same process..those have same method to apply

// let numbers = [1, 3, 5];
// let result1 = true;
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] <= 0) {
//     result1 = false;
//     break;
//   }
// }
// console.log(result1);

// let numbers1 = [1, 3, 5];
// let result = numbers1.every(function (a) {//every() which check every element of the array
//   return a > 0;
// });

// console.log(result);
// //we can use filter through for loop and apply if condition ..use brain to filter data

// // let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);//we can also use item, index and array
// // alert(lengths); // 5,7,6//just we get the length of those item what we want

// // function sayHi(){
// //   console.log('this is function');
// // }
// // let newHi = sayHi;
// // let sayHi = function(){
// //   console.log('this is my another function');
// // }
// // sayHi();
// // sayHi();
// //callback function is most important for function
// //Arrow function is also important for function 

// //general function 
// // let sum = function (a, b) {
// //   return a + b;
// // };

// //arrow function
// let sum = (a,b) => a + b;
// console.log(sum(1,3));

// let double = function (n){
//   return n*2;
// }
// console.log(double(2));
// //we can also write it without argument
// let myArrow = () => console.log('hey bro!!');
// myArrow();


// //function
// function functionName (parameters){
//   console.log('Thsi is function body');
// }
// functionName();//this is function call

// function say(message) {
//   return(message);
//   // console.log(message);//this is undefined
// }
// let results = say("Hello");
// console.log("Result:", results);


// //passing function into another function
// function add(a, b) {
//   return a + b;
// }

// let sums = add;

// function average(a, b, fn) {
//   return fn(a, b) / 2;
// }

// let result2 = average(10, 20, sums);

// console.log(result2);
// //
// function cmToIn(length) {
//   return length / 2.54;
// }

// // function IntoCm(length) {
// //   return length * 2.54;
// // }
// function convert(fn, length) {
//   return fn(length);
// }
// let inches = convert(cmToIn, 10);
// console.log(inches);

// //sometimes we use function as arguments..setTimeOut is a function and we use function its arguments
// var dates = date.getFullYear();
// console.log(dates);