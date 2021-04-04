// Conditonal statements - if , if else/else if, switch, ternary

// If statements
// Check for boolean value, if something is true it is truthy or false

//truthy - if condition is or can be true
//falsy - if condition is false or can be false
//some falsy expressions are null

let isOpen = true;

if (isOpen === true){
    // the code we perform if the conditiion is held in {}
    console.log('The door is open');

};

if (isOpen){
    // the code we perform if the conditiion is held in {}
    console.log('The door is open');
};

if (isOpen === false){
    // the code we perform if the conditiion is held in {}
    console.log('The door is shut');

};

//IF ELSE
//If else is used to check a condition, but run a block of code for either the met
//condition or a seperate code block if it does not meet the condition

let isOpen = false;
if (isOpen === true){
    console.log('You can go inside, the door is open');
} else{
    console.log('The door is not open to enter'); 
};

let temp = 70;
if (temp >= 65){
    console.log('Wow, what a nice day!');
} else{
    console.log('I need a sweater.'); 
};

//ELSE IF
//Else if will allow us to check more than 2 conditions
// Examples - Day 2 challenge, Fizz Buzz challenge
let temp = 68;
if (temp >= 80){
    console.log('I know people are wearing shorts.');
}else if (temp >= 65){
        console.log('This is t-shirt for most people.');
}else if (temp >= 50){
        console.log('Your are going to need a sweater.');  
} else{
    console.log('I am not leaving my house and you can not make me.'); 
};

let userName = "myUserName";
let password = 'myPassWord';

if (userName === 'myUserName' && password === 'myPassWord') {
    console.log('Welcome back');
} else if (user === 'myUserName') {
    console.log('Your username is correct, but you have the wrong password');
} else {
    console.log('You are not in our database, would you like to signup?')
}

//SWITCH statements
//Execute a block of code depending on the "cases"; conditon met? check against cases
//Use case (condition): - starts code block
//break - to end the code
//example: Fizz Buzz
//Default - code to be ran if no cases are met, good practice to have

let favColor = 'Green';
switch(favColor){
    case 'Blue':
    console.log('Blue like the sky');
    break;
    case 'Red':
    console.log('Red like a rosy');
    break;
default:
    console.log(`$(favColor) is a beautiful too.`);
    
}

let doYouLikePizza = 'yes';

switch(doYouLikePizza){
case 'yes':
case 'yeah':
case 'duh':
    console.log('Me too! I love pizza');
case 'no':
case 'nope':
case 'nah':
    console.log('Ohh ... I will order something else for dinner');
default:
    console.log('I can not tell if that is a yes or no...');
};

//TERNARY
//concise way to check two or mor conditions using the sytax of ? and :
//Stucture
//(condition) ? (codetoruniftruthy) : (codition to runiffalse)
let temp = 70;
(temp >= 75) ? console.log('Indiana summer temps'): console.log('Indiana spring temps');

if (temp > 75){
    console.log('Indiana summer temps');
} else {
    console.log('Indiana spring temps');
};

let num = 13;

(num > 0) ? console.log('positive number') :
    (num < 0) ? console.log('negative number') :
        console.log('number is 0, neutral');

//LOOPS
//FOr Loop - a quick and easy way to iterate or loop over something to do it repeated
//loops take in three parameters, each separated by a semicolon
//1. initial expression
//2. condition
//3. increment or decrement expression

for (i=0; i<= 10; i++){
    console.log(i);
}

//to decrease by 1 we use i--
for (i=10; i>= 0; i--){
    console.log(i);
}

//challange - for loop to start at 20 by 2
for (i=0; i<= 20; i+= 2){
    console.log(i);
}

//printing each letter with a loop
let word = 'Fantastic';
for (let i = 0; i < word.length; i++){
    console.log(i);
    console.log(word[i]);
}
