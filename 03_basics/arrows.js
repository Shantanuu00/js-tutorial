const user={
    username:"hitesh",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username},welcome to website`);//this keyword is used to refer curent context within current scope


    }
}
    //user.welcomeMessage()
    user.username="sam"//we can the context
    //user.welcomeMessage()

    console.log(this)
//very important note is that:
//when we log into console this keyword in node environment we get empty object
//but when we log into console this keyword we get window object
//in browser window object is a global object

//arrow function
const addTwo=(num1,num2)=>{
    return num1+num2
}

//if we use curly braces return keyword is compulsory
//console.log(addTwo(3,4))


const addThree=(num1,num2,num3)=>(num1+num2+num3)
console.log(addThree(3,3,3));
//when we use round brackets we dont need to use return keyword






















