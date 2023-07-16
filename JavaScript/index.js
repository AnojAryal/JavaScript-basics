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
 let role = 'guest'; 

 switch (role) {
   case 'guest':
     console.log('Guest User');
     break;
 
   case 'moderator':
     console.log('Moderator');
     break;
 
   default:
     console.log('Unknown User');
 }
 

 //for
 for (let i=0 ;i<5; i++){
    console.log('Hello World');
 }

 //while
 let a=0;
 while(a<=5){
    if(a%2!==0)console.log(a);
    a++
 }

 
 //Do While
 let i =0;
 do{
    if(i%2!==0)console.log(i);
    i++
 }while(i<=5)

 //for in
 const man = {
    name: 'Anoj',
    age: 20
  };
  
  for (let key in man) {
    console.log(key, man[key]);
  }

  //for of 
  const animals =['Tiger','Lion','Dog']

  for (let animal of animals)
    console.log(animal);

 //break and continue
 let k = 0;
 while (k<=10){
   // if(k===5) break;

   if(k%2===0){
      k++;
      continue
   }
   console.log(k);
   k++;
 }

//exercise

//max of 2 numbers 
let num = max(5,10)
console.log(num);

function max(a,b ){
   return(a> b)?a: b;
}

//landscape or potrait
console.log(isLandscape(800, 600))

function isLandscape(width,height){
   return(width>height)
}

//objects
//OOP
const circle = {
   radious : 1,
   location :{
      x : 1,
      y : 1
   },
   isVisible : true,
   draw : function() { //method
      console.log('draw');
   }
}
circle.draw();

//factory functions
function createCircle(radious){
   return {
      radious,
      pin(){
         console.log('pin');
      }  
   }
}

const circle1 = createCircle(2);
console.log(circle1);

const circle2 = createCircle(3);
console.log(circle2);

//constructor functons
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Creating new objects using the Person constructor
var person1 = new Person("John", 25);
var person2 = new Person("Jane", 30);

// Accessing properties of the created objects
console.log(person1.name); 
console.log(person1.age); 

console.log(person2.name);
console.log(person2.age);

//constructor function
function CircleRad(radious){
   this.radious = radious
   this.draw = function(){
      console.log('draw');
   }     
}
const circleRad= new CircleRad(1);
console.log(circleRad);


//value vs Refrence type
let xs = {value : 20}
let yx = xs 


xs.value = 30;

console.log(yx);

//primitive are copied by their values
//objects are copied mby their refrence
let obj = {val : 10}

function increase (obj){
   obj.val ++;
}

increase(obj)
console.log(obj);

//template literal
const name3 = "John";
const age3 = 30;

// Basic usage
const greeting = `Hello, ${name3}!`;

console.log(greeting); 

// Embedded expressions
const message = `My name is ${name3} and I am ${age3} years old.`;

console.log(message); 

// Multiline strings
const multiline = `
  This is a multiline string.
  It can span across multiple lines
  without the need for explicit line breaks.`;

console.log(multiline);

//cloning an object
 const circle3 ={
   radious3 : 1,
   draw3 (){
      console.log('draw3');
   }
 }

 const another1 = Object.assign({},circle3)
 //target object that we pass above doesnt have to be an empty string
 //it cane be existing object and have one or more properties or methods


 //or simply we can use spread operator too ---> ...
 //const amother1 = {...circle};

 console.log(another1);

 //math
 
 console.log(Math.random());
 console.log(Math.round(1.9));
 console.log(Math.max(1,2,3,4,5));

 //string primitive
 const msg = 'hi';
 console.log(msg,'is an ',typeof(msg));
 console.log(msg.length); //there are many more


 //string object
 const ano = new String('hello')
 console.log('ano is', typeof(ano) );

 //date
 const now = new Date();
 const year = now.getFullYear();
 const month = now.getMonth() + 1; // Adding 1 because months are zero-based
 const day = now.getDate();
 
 console.log(`${month}/${day}/${year}`);

 //Arrays 

 //Adding elements
 const arr = [3,4]
 console.log(arr);

 //end
 console.log(arr.push(5,6));

 //beginning
 console.log(arr.unshift(1,2));

 //middle
 console.log(arr.splice(2,0,'a','b'));

 //finding elements

 //primitives

 const arry = [1,2,3,4]

 console.log(arry.indexOf('a'));
 console.log(arry.indexOf(1));

 console.log(arry.includes(1));

 //refrence types

 const courses = [
   {id :1 , name : 'a'},
   {id :2 , name : 'b'}
 ];

 const course =courses.find(function(course){   //predicate or callback function
   return course.name ==='a'
 });
 
 console.log(course);

 //Arrow functions
 const subjects = [
   {id :1 , name : 'Computer'},
   {id :2 , name : 'Mathematics'}
 ];

 const subject =subjects.find(subject=> subject.name ==='Computer');

 console.log(subject);

 //removing elements
 const nu = [1,2,3,4,5]

 //end
 const la = nu.pop()

 //beginning
 const be = nu.shift()

 //middle
 const mi = nu.splice(2,1)

 //Emptying an array
 let arra = [1,2,3,4,5]
 let anot = arra

 //method 1
//  arra =[]

 //method 2
 arra.length=0

 //method 3
//  arra.splice(0,arra.length)

 console.log(arra);
 console.log(anot);