//ctrl alt n && ctrl shift j for console vs and crome   or F12
//variable name is always case sensetive
//variable name  meaningful
// var name camelCase..we can use underscore and dolar sign
//comment : ctrl / (single comment) and ctrl+alt+a (multiple comnt)
// var let const

// var a =2;
// var b =3;
// var c=3;
// //or
// var a=2, b=3, c=3;
// //or
// var a=2, b=c=3;
// //or
// var a=2;
// var b=c=3;
// console.log(a);

// var a = 2;
// var  a =3;
// console.log(a);
// var a = 4;
// console.log('this is a variable ', a ,'and it has a value');

// console.log(2,3,4);

//let eggPrice = 5;
// let totalEgg = 12;
// let totalCostOfEgg = eggPrice*totalEgg;
// console.log(totalCostOfEgg);

// var x =3;
// console.log(x+=6);

//i++ and ++i what it is ? clearified it
// var i = 3;
// while(i++ < 5 ){
//     console.log(i);
// }
// //here enter the value 3 in the condition but get output 4 because increment it
// //here matter is that which value enter into the condition
// //x = y++
// //x= y and after that y = y+1 that the issue

// //condition operator (if , if ..else, if ..else if.. else)
// if (6>5){
//     console.log('yes, i am bigger');
// }else {
//     console.log('sorry man , i am little');
// }

// var name = 'mithun';
// if(name == 'sobuj'){
//     console.log('Sobuj is my roommate');
// }else if (name == 'hasib'){
//     console.log('Hasib is my roommate');
// }else if(name =='tuhin'){
//     console.log('Tuhin is my roommate');
// }else{
//     console.log('mithun isn\'t here');
// }
// //good practice is that always try to write value first than variable name
// //this is not compulsory its good practice

// var bazar1 = 'mango';
// var bazar2 = 'apple';
// var areYouComplete = true;
// if('mango'== bazar1 && 'apple'== bazar2 && areYouComplete == true){
//     console.log('Yes, I complete my bazar');
// }else{
//     console.log("wait ");
// }

// if(bazar1=='mango'){
//     if(bazar2=='apple'){
//         if(areYouComplete==true){
//             console.log('we will go ...');
//         }else{
//             console.log("wait....");
//         }
//     }
// }
// //ternary operator which makes if else condition short
// var a = 2;
// var b = 3
// var result;
// result = (a > b ) ? 'this is true' :'this is wrong';
// console.log(result);

// //switch statement
// // var name = 'mithun';
// var name = 'sobuj';
// switch(name){
//     case 'sobuj':
//         console.log('roll no 1');
//         break;

//     case 'mithun':
//         console.log('roll no 2');
// }

// //if elseif condition
// var student = 'mithun'
// var student = 'sobuj'
// var student = 'jahan'
// if('jahan'== student ){
//     console.log('He is first in the class');
// }else if('sobuj'== student){
//     console.log('He is second in the class');
// }else if ('mithun' == student){
//     console.log('He is third in the class');
// }else{
//     console.log('He isn\'t the student of the class');
// }

// var i ;
// for( i = 0; i<5; ++i){
//     console.log(i);
// }
// console.log('this is nafish');

// var bangla ;
// console.log(bangla);
// bangla = 'Is my mother language';
// console.log(bangla);

// //never declere same name variable with let because we get here error
// val = String (new Date());
// console.log(val);
// console.log(typeof val);
// //transfer into string
// //
// val =(3).toString();
// console.log(val);
// console.log(typeof val);

// val = parseFloat('11.22')
// console.log(val);
// val = parseInt('11.22')
// console.log(val);
// val ='nafish';
// console.log(val.length);
// val = String(222);
// console.log(val);//remember that in the console string is in black and
// //number is in the light blue color ...when we convert number to string
// //it will black
// val ='hello bangladesh \n Are you okay?'
// console.log(val);
// console.log(val.length);

//insted of a=a+2 we can write here a+=2;
//must be use equeal sign after variable name
// var complex = 22 + 2 + ' '+'this is test ' + Number (2) + Number (3);
// console.log(complex);
// //after string a number behave like string
// //
// val = 1>.5 || 3<5
// console.log(val);//we need atleast one correct condition for true

// var a = ' nafish';
// var A = ' jahan'
// console.log(A);
//i++ and ++i
//if else and if elseif

//! @ # $ %

// let message;

// message = 'Hello!';

// message = 'World!'; // value changed

// alert(message);

// var num = 3;
// // ++num
// num += 3;
// console.log(num);

// // var a = 'this "s"'
// var a = "this is 'a' "
// console.log(a);
// console.log(typeof a);

// var a = 2;
// var b = 3;
// var c = a>b ? 'a is greeter than b ': 'b is less than a'
// //var var_name = condition ? value : value;
// console.log(c);

// var d = 0;
// function a (b ){
//    return b - 3;
// }
// d = (a (7));
// // var c = a(5);
// // console.log(a(5));
// // console.log(c);
// console.log(d);

//we should call it with funttion name and its value

// function myFunc (val){
//     if (val>12){
//         return 'this is greater than 12';
//     }return ' thsi si not greater than 12'
// }
// console.log(myFunc(24));

// //always try to use it
// var getUserRole = function (name,role){
//     switch (role){
//         case "admin":
//         return `${name} is admin`;
//         break;
//         case 'subadmin':
//             return `${name} is subadmin`;

//     }
// }
// // console.log(getUserRole("nafish","admin"));
// var getRole = getUserRole ('subadmin', 'subadmin')
// console.log(getRole);

// //try to avoid it ...
// function myFunc (name, val){
//     var answer = '';

//     switch (val){
//         case 1:
//         answer =`${name} is 1`
//         break;
//         case 2:
//        answer =` ${name} is 2`
//     }
//     return answer;
// }
// console.log(myFunc('nafish',1));

// var myObj = {
//     "name ": 'sobuj',
//     "age": 23
// }

// answer = myObj.age;
// answers = myObj["name "];
// console.log(answer);
// console.log(answers);

// var accesToNameWithVariable = "name ";
// var student = myObj[accesToNameWithVariable];
// console.log(student);

// myObj.name =  'nafish';//modify name
// console.log(myObj);

// var myNewName = "name";
// var newName = myObj["name"]
// newName =myObj["name"]
// console.log(newName);

//add new property to the object
// myObj.department = "cps";
// console.log(myObj);

// newDep = myObj.department;
// console.log(newDep);

// var name = function (name, run) {
//   switch (run) {
//     case 5:
//       return `${name} get 5 run`;
//     case 7:
//       return `${name} get 7 run`;
//     default:
//       return `there is no one`;
//   }
// };
// console.log(name("ag", 75));

// var myObj ={
//   'name':'sobur',
//   'age':23
// }
// newName = myObj.name;
// console.log(newName);

// myObj.name = 'a';
// console.log(myObj);

// myObj.department = 'cps'
// console.log(myObj);

// var ternary_operator = (2<4) ? 'yes': 'no';
// console.log(ternary_operator);

// **** try to know about alert , prompt and confirm  ****

////  alert
// alert("This is a message");
// window.alert("Hello world!");

////prompt

//  let name = prompt("What is your name?", "Guest");
//  alert(`${name} is your name`);
//  console.log(name);

// there are many ways to use the prompt feature
// sign = window.prompt(); // open the blank prompt window
// sign = prompt();       //  open the blank prompt window
// sign = window.prompt('Are you feeling lucky');
// sign = window.prompt('Are you feeling lucky', 'sure');

//sign = window.prompt("Are you feeling lucky");
// alert(sign  + ' i am !' )

// sign = window.prompt("Are you feeling lucky", "sure");
// alert(sign  + ' i am !' )

// let sign = prompt("Enter cupon code!","ashik");
// if (sign.toLowerCase() === "jahan") {
//   alert("congratulation! you got it");
// }else{
//     alert('sorry!better luck next time')
// }

////confirm
// if (window.confirm("Do you really want to leave?")) {
//   window.open("exit.html", "Thanks for Visiting!");
// }

// let isBoss = confirm("Are you the boss?");
// alert( isBoss ); // true if OK is pressed

//  let deletePost = confirm("Do you really want to delete this post?");
//  // console.log(deletePost);
//  if (deletePost) {
// //    Code to delete the post
//    // console.log("Your post has been deleted successfully");
//    alert("Your post has been deleted successfully");
//  } else {
//    // Code to cancel deletion of the post        
//    // console.log("Your post has not been deleted");
//    alert("Your post has not been deleted");
//  }

/*  var age = 34;
let message =(age < 3)? "Hi, baby!" : (age < 18)? "Hello!" : (age < 100) ? "Greetings!" : "What an unusual age!";
console.log(message);
var height =undefined;
height = height ?? 100;
alert(height);
 */

// let a = 'ashik';
// let a = 3;
// console.log(a);

// let cuponCode = confirm ('Enter your cupon code!!!')
// if(cuponCode){
//     alert('congratulation!!')
// }else{
//     alert('Sorry!Better luck next Time.')
// }

// var a = 'nafish'>'wasim' ;
// console.log(a);

// var b = 'A'< 'a';
// console.log(b);

// function ask(question, yes, no) {
// if (confirm(question)){ 
//     yes()
// }else {no()}
// }

// ask(
//   "Do you agree?",
//   function () {
//     alert("You agreed.");
//   },
//   function () {
//     alert("You canceled the execution.");
//   }
// );



// function ask(question, yes, no) {
//   if (confirm("are you?")) {
//     alert("I want it ");
//   } else {
//     alert("want not it");
//   }
// }
// ask(
//     'do you want ', 'no', 'yes'
// )



//example of callback function
// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }
// function showOk() {
//   alert("You agreed.");
// }
// function showCancel() {
//   alert("You canceled the execution.");
// }
// // usage: functions showOk, showCancel are passed as arguments to ask
// ask("Do you agree?", showOk, showCancel);



// //callback function
// function addition(x, y, callback) {
//   setTimeout(() => {
//     alert(`The sum of ${x} `); //and ${y} is ${x + y}.
//     y();
//     callback();
//   }, 0);
// }
// //apply y() function
// function anotherY(){
//   alert('my second function')
// }
// // display() function is called just after the ending of addition() function
// function display() {
//   alert("Numbers added!");
// }
// // Calling addition() function
// alert(addition(5, anotherY, display));

var a = 2;
var b = 3;
console.log(a+b);