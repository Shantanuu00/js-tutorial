//singleton
//using constructor
//const tinderUser=new Object()


//non singleton
const tinderUser={}

tinderUser.id="123abc"
tinderUser.name="Sammy"
tinderUser.isLoggedIn=false
//console.log(tinderUser);

//we can also extract keys or values from above object
//console.log(Object.keys(tinderUser));
//console.log(Object.values(tinderUser));



const regularuser={
    email:"some@gmail.com",
    fullname:{
        usersfullname:{
            firstname:"hitesh",
            lastname:"chaoudhary"
        }

    }
}

//obove is a exam of object inside another object

//console.log(regularuser.fullname.usersfullname.firstname);



//we can also merge different objects 
const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}

//this is not right way to merge because it also accepts another objects an array
//const obj3={obj1,obj2}

//this is better way using Object.assign
//syntax={}=>target and obj1 and obj2 are source
//const obj3=Object.assign({},obj1,obj2)
//console.log(obj3);


//third using spread operator
const obj3={...obj1,...obj2}
//console.log(obj3);


//Very imp
//Object destructuring and JSON API
const course={
    coursename:"JS in Hindi",
    price:"999",
    courseInstructor:"Hitesh"
}

const {courseInstructor}=course
console.log(courseInstructor);

//we can also destructor values using more short name that is instructor
const{courseInstructor:instructor}=course
console.log(instructor);


//JSON 
{
    "name"="hitesh",
    "coursename"="Js in hindi",
    "price"="free"
}
//both side are in string format




