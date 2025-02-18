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

while(num < 10){
  console.log(num);
  num++;
}

for(let i=0; i <10; i ++){
  console.log(i);
}

