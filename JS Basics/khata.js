/* let name = 'nafish';
 name = 'jahan';
 console.log(name);
//  const myName = 'jahan';
//  myName = 'ashik';
//  console.log(myName);
 var nameOfOther = 'jahan';
 var nameOfOther = 'ashik';
 console.log(nameOfOther); */

/*  var a = 3;
 var b = 3;
 var c = 3;
 console.log(a);
 console.log(b);
 console.log(c);
 //
 var a = 3, b = 3, c = 3;
 console.log(a);
 console.log(b);
 console.log(c);
 
 var a= b = c = 3;
 console.log(a);
 console.log(b);
 console.log(c);
 */

//  var y = 3;
//  console.log(x=++y);
//let does not work outside of the blockscope and loop
//let & var don't work outside of the function scope..for that we need global scope
//question is that what is block scope ? {} this is block scope ...


var name = 'nafish';
console.log(name.padStart(8,'*'));
console.log(name.padEnd(8,'*'));
console.log(name.repeat(8));

//transfrom from object to array
var obj = {
    a: 1,
    b: 2
}
console.log(Object.entries(obj));

//never two symbol will be same 
let s1 = Symbol();
let s2 = Symbol();
console.log(s1 === s2);

var a =2;
console.log(a);
var a =2;
console.log(a);