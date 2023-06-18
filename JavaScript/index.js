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

//operators

//Arthmetic operators 

let x= 15
let y = 5

console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(x/y);
console.log(x%y);
console.log(x**y);

//increment ++
console.log(x++);
console.log(x);

//decrement --
console.log(--x);


//Assignmant operators

x = x+5 ;
x+= 5 ;

x = x*5 ;
x*= 5;

//in above expression both the cases are
// same we can assign both at once too

//comparison operators
 console.log(x> 10);
 console.log(x>=20);
 console.log(x<10);
 console.log(x<= 10);

 console.log(x ===10);
 console.log(x !== 10);


 //equality operators

 //strict equality (type and values)
 console.log(1 ===1);
 console.log('1' ===1);

 //lose equality --only focuses on value
 console.log(1 == 1);
 console.log(true == 1);
 console.log('1' == 1);

 //ternary operators 

 let points = 120

 let type = points > 100 ? 'gold customer' : 'silver customer'
 console.log(type);

 //logical operators

 //AND &&
 console.log(true && true);
 console.log(false && true);

 let highIncome = true;
 let goodCreditScore = false;
 let eligibleForLoan = highIncome && goodCreditScore
 console.log(eligibleForLoan ? 'yes loan granted': 'loan not granted');

 //OR ||
 eligibleForLoan = highIncome || goodCreditScore
 console.log(eligibleForLoan ? 'yes loan granted': 'loan not granted')

 //truthy and falsy 
 let userColor = 'red';
 let defaultColor = 'green'
 let currentColor = userColor || defaultColor
 console.log(currentColor);

 //Not !
 console.log(!eligibleForLoan)

//bitwise operator
 console.log(1 | 2); //bitwise OR
 console.log(1 & 2); //bitwise AND 

 // to read 00000100
 // to red / write 00000110
 //read write execute 00000111

 //if else 

 let hour = 10;

 if(hour >= 6 && hour < 12){
    console.log('Good morining');
 }
 else if (hour >=12 && hour < 6){
    console.log('Good Afternoon');
 }
 else{
    console.log('Good Evening');
 }

 //switch case
 let role;

 switch (role){
    case 'guest':
        console.log('Guest User');
        break; 

    case (moderator):
        console.log('Moderator');
        break;

    default:
        console.log('Unknown User')

 }

 //for
 for (let i=0 ;i<5; i++){
    console.log('Hello World');
 }