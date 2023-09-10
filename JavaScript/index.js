console.log('Hello World!');

let name = 'fraNzY';  //variable
const value = 6 ; // constants

//primitive types

let firstName = 'FraNzY'; //string literal
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

 //combining and slicing arrays
 const fi = [1,2,3,4,5]
 const se = [6,7,8,9]

 const combined = fi.concat(se)
 const slice = combined.slice(0,5 )

 console.log(combined);
 console.log(slice);

 //spread operator
 const arr1 = [1, 2, 3];
 const arr2 = [4, 5, 6];

 const combinedArray = [...arr1, ...arr2]; 

 console.log(combinedArray);

 //iterating an array
 const iterates = [1,2,3,4,5]

 //for of
 for (let iterate of iterates)
   console.log(iterate);
  
 //for each
 iterates.forEach(numb =>
   console.log(numb)
 );

 //joining arrays
 const numberss = [1, 2, 3, 4, 5];
 const joinedString = numberss.join(" - ");
 console.log(joinedString);


 const sentence = "Hello, my name is Asmi";
 const wordsArray = sentence.split(" ");
 console.log(wordsArray);

 console.log(wordsArray.join('-'));

 //sorting arrays
 const sorts = [1,5,2,4,9,7,8,3,6]
 console.log(sorts.sort());

 console.log(sorts.reverse());


 const cours = [
   {id : 1 ,name : 'Node.js'},
   {id : 2 ,name : 'javascript'}
 ]

 cours.sort(function(a,b){

   const NameA = a.name.toLowerCase();
   const NameB = b.name.toLowerCase();

   if (NameA < NameB) return -1
   if (NameA > NameB) return 1
   else return 0 ;
 })
 console.log(cours);


 //testing elements of an array
 const numbe = [1,2,-2,3,4,5]

 //every method
 const allPositive = numbe.every(function(value){
   return value >=1
 });
 console.log(allPositive);

 //some method
 const atLeastOnePositive = numbe.some(function(value){
   return value>=1
 });
 console.log(atLeastOnePositive);

 //filtering an array
 const filternum = [1,2,3,-3,-1,0,4,5]

 const filtered = filternum.filter(n => n>=1)

 console.log(filtered);

 //mapping an array
 const numberr = [1,2,3,-3,0,4]

 const items = numberr   //chaining
 .filter(n => n>=1)
 .map(n =>({value : n}) );

 console.log(items);

 //reducing an array
 const ser = [1,-1,2,3]

 const sum = ser.reduce(
   (accumulator ,currentValue) => accumulator + currentValue);

 console.log(sum);


 //Functions

 //function decleration

 walk(); //hoisting ---->process of moving function decleration to the 
 //top of the file . done automatically by javascript engine

 function walk(){
   console.log('walk');
 }

 //function expression
 let run = function(){
   console.log('run');
 }
 run();

//Arguments
function summ(){
   total = 0;
   for (let value of arguments)
   total += value
   return total
}
console.log(summ(1,2,3,4,5));

//rest operator
function rest(discount,...prices){
   const total = prices.reduce((a,b)=>a+ b);
   return total * (1-discount)
}
console.log(rest(0.1,20,30));

//default parameters
function interest(principal,rate =5,years = 2){
   return principal*rate/100*years;
}
console.log(interest(10000));

//getters and setters
const identity = {
   firstname : 'Asmita',
   lastname : 'Aryal',
   get fullname() {
     return `${identity.firstname} ${identity.lastname}`
   },
   set fullname(value){
      const parts = value.split(' ');
      this.firstname = parts[0];
      this.lastname = parts[1];
   }
};
identity.fullname = 'Sujta Shakya';

console.log(identity);

  //Scope

 //local and global scope 

 const col = 'haha'; // Global scope

 function hi() {
   const message1 = 'hi';
 }
 
 function bye() {
   const message1 = 'bye';
   console.log(col); // Accessing the global variable 'colors'
 }
 
 console.log(col);
 
 //try and catch
 function divide(a, b) {
   if (b === 0) {
     throw new Error("Cannot divide by zero!");
   }
   return a / b;
 }
 
 try {
   const result = divide(10, 0);
 } catch (error) {
   console.log("An error occurred:", error.message);
 } 

 //let vs var 

 function exampleFunction() {
   if (true) {
     let x = 10; // Block-scoped variable
     var y = 20; // Function-scoped variable
     console.log(x); 
   }
   console.log(y);
 
   console.log(a);
   var a = 5;
   let b = 10;
   console.log(a); 
   b = 15; 
   console.log(b); 
 }
 
 exampleFunction();

 //this keyword
 
 //method -->object
 //function --> global(window ,global)
 const video = {
   title: 'a',
   tags: ['a', 'b', 'c'],
   showTags() {
     this.tags.forEach((tag) => {
       console.log(this.title, tag);
     });
   },
 };
 
 video.showTags();
 

 function Video(title){
   this.title =title
   console.log(this);
   // 'this' refers to the newly created object when 'Video' constructor is invoked with 'new'
 }
const v = new Video('a'); //{}

//changing this
function playVideo(){
   console.log(this);
}
playVideo.call({name : 'FraNzY'});
playVideo.bind({name : 'FraNzY'})();


//programming practice


//loop practice

// Step 1
console.log("Numbers from 1 to 10:");
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Step 2
console.log("\nEven numbers from 2 to 20:");
for (let i = 2; i <= 20; i += 2) {
  console.log(i);
}

// Step 3
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

const number = 5;
console.log("\nFactorial of", number, "is", factorial(number))

//for loop
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

//fibonacci series
function fibonacci(n) {
  let fibSeries = [0, 1];

  for (let i = 2; i < n; i++) {
    fibSeries[i] = fibSeries[i - 1] + fibSeries[i - 2];
  }

  return fibSeries;
}

const n = 10;
const fibNumbers = fibonacci(n);

console.log(`Fibonacci series of ${n} numbers:`);
console.log(fibNumbers.join(", "));

//to print reverse
function printReverse(inputString) {
  var reversedString = "";
  for (var i = inputString.length - 1; i >= 0; i--) {
    reversedString += inputString[i];
  }
  console.log(reversedString);
}

var input = "Hello, world!";
printReverse(input);

//to print pallindrome
function isPalindrome(num) {
  const numStr = num.toString();
  const reversedStr = numStr.split('').reverse().join('');
  return numStr === reversedStr;
}

const inputNumber = 12321;
if (isPalindrome(inputNumber)) {
  console.log(`${inputNumber} is a palindrome.`);
} else {
  console.log(`${inputNumber} is not a palindrome.`);
}

//get day of week
function getDayOfWeek(year, month, day) {
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const date = new Date(year, month - 1, day);
  const dayOfWeekIndex = date.getDay();
  return daysOfWeek[dayOfWeekIndex];
}

const year1 = 2023;
const month1 = 8;
const day1 = 15;

const dayOfWeek = getDayOfWeek(year1, month1, day1);
console.log(`The day of the week for ${month1}/${day1}/${year1} is ${dayOfWeek}.`);

//print sum of 2 numbers
const fir = 12
const sec = 18
console.log("the sum of 2 numbers is :",fir+sec);