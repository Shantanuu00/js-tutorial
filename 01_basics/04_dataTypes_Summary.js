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
//In Stack there copy is passed
//In heap , reference is there so original is changed

let myYoutubename="hiteshchoudharydotcom"
let anothername=myYoutubename
anothername="ChaiaurCode"
console.log(myYoutubename);
console.log(anothername);
//Here when you create an new varible another name, copy is passed of hiteshchoudhary is passed
//so copy of hitesh choudhary dot com is assigned to another name
//when we assign chaiaurcode to anothername, another name is changed
//thererfore copy is changed
//original hiteshchoudharydotcom of myYoutubename is same.




let userOne={
    emailId:"üser@google.com",
    upi:"user@ybl"

}

let userTwo =userOne;
//both user one and user two are pointing to same object in heap
//So if you changed any element of user two...Original object is changed
//eg if i changed email of usertwo and original there is change in original object













