//function definition
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
   }

   //function call
   //sayMyName();


   //function addTwoNumbers(number1,number2){
    //console.log(number1+number2);
   //}
   //const result=addTwoNumbers(3,5);
   //here function is not returning
   //we need to pass a return statement 


   function addTwoNumbers(number1,number2){
    let result=number1+number2
    return result
   }
   //result variable in function and below result are 2 different variables

   const result=addTwoNumbers(3,5);
   //console.log("Result:",result);


   //more example of functions using if else
   //and notice return statements here
   
   function loginUserMessage(username){
    if(!username){
        console.log("Please enter the username");
        return
    }
    return `${username} just logged in`

   }

   //console.log(loginUserMessage("hitesh"));
 

   //eg we want to add products prices user added in cart 
   //we don't know exact product prices
   //we can use rest operator in such cases
   //it returns an array
   //further we can add these numbers using loops
   //rest operator represents ...operator

   function calculateCartPrices(...num1){
    return num1
   
}
//console.log(calculateCartPrices(200,400,500))




//we can also pass objects in funtion
const user ={
    username:"hitesh",
    price:199
}
//here anyobject is can be any object not just user
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);

}
//handleObject(user)


//we can also pass array using functions
const myNewArray=[200,400,100,600]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log((returnSecondValue(myNewArray)));



   
