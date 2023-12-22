//for
for (let index = 0; index <=10; index++) {
    const element = index;
    if(element==5){
       // console.log("5 is the best element");
    }
    //console.log(element);
}

for (let i = 0; i <=10; i++) {
    //console.log(`Outer loop value:${i}`);
    for(let j = 0; j <=10; j++) {
        //console.log(`Inner loop value:${j} and inner loop:${i}`);
        }
}




let myArray=["flash","batman","superman"]
//console.log(myArray.length);
for (let i = 0; i < myArray.length; i++) 
{
    const element = myArray[i];
    //console.log(element);
}







//high order array loops

const arr=[1,2,3,4,5]
//for (const nums of arr) {
    //console.log(nums);
//}


//map
const map=new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")
//console.log(map);
//iteration though maps
for (const [key,value] of map) {
    console.log(key,':-',value);
}

















