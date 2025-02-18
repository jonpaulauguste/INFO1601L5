/*

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];// 10 elements

for(let i=0; i< arr.length; i++){
  console.log(arr[i])
}

let radius = 10;
const pi = 3.14;

let area = pi * radius * radius;

let str1 = "Hello World";
let str2 = 'Hello World';
let str3 = 
`
Hello World`;

console.log(str1, str2, str3);

let name = "bob";
let age = 24;

console.log(typeof(name)) // string
console.log(typeof(age)) // number

console.log(`Hello my name is ${name}, I'm ${age} years old`);
//Hello my name is bob, I'm 24 years old.

console.log(`I was born in ${2020 - age}`)
//I was born in 1966

console.log('1' == 1); //true
console.log(1 == true); //true
console.log("false" == false); // "false" is not false
console.log("false" == true); // "false" is not true either

if("false")
console.log("Hello false!") //but "false" is true enough here

console.log('1' === 1); //false
console.log(1 === true); //false
console.log("true" === true); //false

let grade = 67;

if( grade < 50){
   console.log('Failed');
}else{
   console.log('Passed');
}

let num =0;

while(num <= 10){
  console.log(num);
  num++;
}

for(let i=0; i <=10; i ++){
  console.log(i);
}

for(let i=0; i< 50; i++){
  if(i %3 === 0 && i%5 === 0){ // is divisible by 3 and 5?
    console.log('fizzbuzz');
  }else if(i%3 === 0){ // ok it's not divisible by both how about just 3?
    console.log('fizz');
  }else if(i%5 === 0){ //no? what about just 5 then?
    console.log('buzz');
  }else{              //so its not divisible by 3 or 5 then
    console.log(i);
  }
}



// new section 5 - Date and Math

let nowTimeStamp = Date.now();
console.log(nowTimeStamp);


let now = new Date(nowTimeStamp);

let date = new Date(2019, 11, 17, 3, 24, 0);//December 17, 2019 03:24:00

console.log(date.toLocaleDateString("en-US"));//12/17/2019
//1 is added to month because January is 0
console.log(` ${now.getDate()} - ${now.getMonth() + 1} - ${now.getFullYear()} `); // 9 - 2 - 2020 

//Calculate difference between two dates in milliseconds
let difference = now - date;
//convert milliseconds to days

let daysBetween = difference * 1.15741e-8;
console.log(daysBetween);//54.6740790437368





let root = Math.sqrt(9);// 3

let cubed  = Math.pow(2, 3);// 8

let roundDown = Math.floor(12.3453);// 12

let roundUp = Math.ceil(12.3453);// 13

let absolute = Math.abs(-34);// 34

let randNum = Math.random();// random number between 0 and 1

// let pi = Math.pi;// pi in radians * 180 to convert to degrees

//generate a random Integer between a supplied range
function randInt(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}


// new section 6 - Functions

function hello(){
  console.log('Hello World');
}

function add(a, b){
  return a + b;
}

let ans = add(2, 3);
console.log(ans);//5

let ans2 = add();
console.log(ans2);//NaN

function add(a, b=10){
  return a + b;
}

console.log(add(5,11)); // logs 16

console.log(add(2));// logs 12

// let sum = 10

// function sum(){ //duplicate declaration error
// }

function happyPrint(string){
  console.log("😀: "+string);
 }
 
 function sadPrint(string){
  console.log("😢: "+string);
 }
 
 //This high-order function adds 2 parameters and passes the answer to the callback
 function add(a, b, callback){
    let ans = a + b;
    callback(ans);// call the callback and pass the answer to it
 }
 
 //call add passing the callbacks to it
 
 add(5, 10, happyPrint);
 add(11, 12, sadPrint);

*/


 //prints current date
function printDate(){
  console.log(new Date().toLocaleTimeString());
  if (stop){
    clearInterval(interval);
  }
}
     
setInterval(printDate, 1000);