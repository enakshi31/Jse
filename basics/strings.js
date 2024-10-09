const name = "enakshi "
const repoCount = 50

// console.log(name + repoCount + "Value");

// console.log('Hello my name is ${name} and my repo count is ${repoCount}');

const gameName = new String('enakshiab')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4) // last value will not include matlab output will be enak
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "    Enakshi   "
console.log(newStringOne);
console.log(newStringOne.trim); // trim removves the extra starting and ending spaces

const url = "https://enakshi.com/enakshi%3113singla"

console.log(url.replace('%3113','-'))

console.log(url.includes('enakshi'))

console.log(gameName.split('-'));