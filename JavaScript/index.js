console.log('Hello World!');

let name = 'fraNzY';  //variable
const value = 6 ; // constants

//primitive types

let firstName = 'Anoj'; //string literal
let age = 20; //number literal
let isApproved = false ; //boolean literal
let lastName = undefined ;
let selectedColor = null;

//refrence types -- object ,array ,function

//objects
let person = {
    gender : 'male' ,
    contact : 9823186396
}

console.log(person);

//dot notation
person.gender = 'female'
console.log(person.gender);

//acessing using bracket notation
person['gender'] = 'other';
console.log(person['gender']);

//array
let colorsList = ['red','green'];
colorsList[2]='blue'  //dynamic
console.log(colorsList);

//functions
function greet(Name){
    
    console.log('Hello '+ Name);
}
greet('FraNzY');

//value calculating
function square(number){
    return number * number;
}
console.log(square(2));