// Day 4 functions, scope, hoisting and literals

//Literals - represent values in JS that have been hardcoded
let butlerMascot = 'Bulldog';
let myAge = 30;
let arr = []; // empty array

//Hoisting
// - general way of thinking about how code creation and execution works in JS
// - JS puts variable declarations and function declarations into memory during
// comple phase of the code.  This makes it feel that those are on top
// or loaded first.
// - let or const are NOT hoisted only functions and var

//functions
sayHello();
function sayHello(){  //function declaration is hoisted
    console.log("this is a function")
}

let func = function(){ //function expression is NOT hoisted
    console.log("This is a function expression")
}

func()


//Scope
//Hierarchy of varibles in our code - commonly referred to as global
//scope, local scope, parent scope and child scope

let coffeeOrigin = 'Ethiopia'   //global scope()
function exampleFunction(){
    let x = 'declared inside function' //local scope - declared inside function
    console.log(x)
}
exampleFunction();

//Global scope can be accessed by local function scope
//Local scope cannot be accessed by global scope

//MDN DOC: https://developer.mozilla.org/en-us/docs/Glossary/scope




