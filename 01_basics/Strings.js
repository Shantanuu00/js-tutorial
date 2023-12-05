const name = "Hitesh"
const repoCount = 50

console.log(`Hello my name is ${name} and my repo is ${repoCount}`);
//This is also a method of creating a string object

const gameName = new String('Shan');
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));

console.log(gameName.indexOf('n'));
const newString = gameName.substring(0,4);
console.log(newString);


const newStringOne="   hitesh   "
console.log(newStringOne);
console.log(newStringOne.trim());
const url="https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','-'));
console.log(url.includes('hitesh'));
console.log(url.split('/'));


