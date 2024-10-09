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
console.log("Hello world");
}

console.log(typeof bigNumber); // false, undefined
console.log(typeof outsideTemp); //false, object
console.log(typeof scoreValue); //false, number
console.log(typeof myFunction); //false, object function