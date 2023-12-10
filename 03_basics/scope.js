var c=300;
if(true){
let a = 10
const b=20
c=40
}

//inside curly braces is block scope
//when access is outside is global scope

//console.log(a);//this is not available outside block scope
//console.log(b);//this is also not available outside block scope
//console.log(c);//this it is available outside block scope

//var variables declared outside block scope can be modified inside block scope
//let and const can be modified but its scope is inside the block scope


//remember in browser when we inspect there is different scopes
//and here in node environment we our global scope is different



//Now we can understand how scopes play a role in nested functions

function one(){
    const username="hitesh"

function two(){
    const website="youtube"
    //console.log(username);
}
//console.log(website);
two()
}

one()

//undertand above code 
//website is only accessible inside two() in its own function scope
//but username can be accessible in two() 



//++++++++++++++++++Interesting+++++++++++++++++++++++++++++++++++++++++++++


//function and function expressions
addone(5)
function addone(num){
    return num+1
}
addone(5)
//above is function
//it does not prints value but it excecutes

addTwo(5)//this will show error because it is stored under variable

const addTwo=function(num){
    return num+2
}
addTwo(5)
//here function is declared using variable 
//it is function expression

//minihoisting
//addone function can be executed before declaration
//but adtwo will not be excecuted because it is declared under variable





