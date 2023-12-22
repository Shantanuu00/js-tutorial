let myDate=new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());


let myCreatedDate=new Date("01-14-2023")
console.log(myCreatedDate.toLocaleString());

let myTimeStamp=Date.now()
console.log(myTimeStamp);
//It get times in milliseconds

console.log(myCreatedDate.getTime());
//We can get time in milliseconds

console.log(Math.floor(Date.now()/1000));
//We can get date in seconds
//But remember always use milliseconds to compare dates

let newDate =new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

newDate.toLocaleString('default',
{
    weekday:"long"

})







