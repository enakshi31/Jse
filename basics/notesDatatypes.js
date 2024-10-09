// # Primitive datatype

// 7 types : String, Number, Boolean, Null, undefined, symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail = undefined

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 32896424072093740n



// Reference type (Non primitive datatype)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "enakshi",
    age: 18,
}

const myFunction = function(){
// console.log("Hello world");
}

// console.log(typeof bigNumber); // false, undefined
// console.log(typeof outsideTemp); //false, object
// console.log(typeof scoreValue); //false, number
// console.log(typeof myFunction); //false, object function

// https://262.ecma-international.org/5.1/#sec-11.4.3


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack memory (Primitive), Heap memory (Non primitive)

let myYoutubename = "Enakshisingladotcom"

let anothername = myYoutubename
anothername = "Enaaaaaa"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "enakshi0148@gmail.com"
    upi: "user@okaxis"
}

let userTwo = userOne

userTwo.email = "enakshi@google.com"

console.log(userOne.email);
console.log(userTwo.email);

// stack mein copy milta h and heap mein reference milta h

