//object literals
const mySym=Symbol("key1"); 

const JsUser={
    name:"Hitesh",
    "full name":"Hitesh choudhry",
    [mySym]:"mykey1",
    age:18,
    location:"Jaipur",
    email:"hitesh@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}
//above if we declare mysym without brackets,it will be treated as a string
//to treate mySym as a symbol data type make it is declare in a square bracket


//eg we want to access an email
//we can achieve it using 2 ways
//using dot operator
//console.log(JsUser.email)

//also using square brackets
//console.log(JsUser["email"])

//we can also change properties using =
JsUser.email="hitesh@chatgpt.com"

//we can also lock using Object.freeze(JsUser)

//console.log(JsUser);

//Now we can also declare functions as a object literal

JsUser.greeting=function(){
    console.log("Hello Js User");
}
console.log(JsUser.greeting());

//By using string interpolation we can reference properties using this keywords
JsUser.greetingTwo=function(){
    console.log(`Hello JS user, ${this.name}`)
}
console.log(JsUser.greetingTwo());
