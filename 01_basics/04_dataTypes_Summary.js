//primitives
//7 types:String ,number,boolean,null,undefined,Symbol,bigInt

//Non-primitives Or reference types
//Array,Objects,Functions

//const score=100
//const scoreValue=100.3
//const isLogged = false
//const outsideTemp = null
//let userEmail;

const id=Symbol('123')
const anotherEmail=Symbol('123')

console.log(id===anotherEmail);

//reference(Non primitives)
//Arrays,Objects,Functions

const heros=["shaktiman","naagraj","doga"];

let myObj={
    name:"shantanu",
    age: 24,

}

const myFunction=function(){
    console.log("Hello World")
}

//DataType of null is always object
//DataType of nonprimitives is object function
console.log(typeof heros);
console.log(typeof myObj);
console.log(typeof myFunction);
//typeof function is function
//typeof null is object


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Stack(Primitives) ,Heap(Non-Primitives)





