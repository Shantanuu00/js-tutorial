const myArr = [0,9,2,3,4,5]
const myHeros = ["shaktiman","naagraj"];
//There is one more way of declaring an array

const myArr2 = new Array(1,2,3,4)
console.log(myArr2[0]);

//Array methods
//myArr.push(6)
//push method adds value 
//myArr.pop()
//pop method simply removes the last element from an array

//myArr.unshift(9)
//it adds one or more elements at beginning of an array and returns it with new length

//myArr.shift()
//shift removes first elements from an arrays and returns it

//console.log(myArr.includes(9))
//it returns boolean based on whether it includes that value or not

//console.log(myArr.indexOf(3));
//it returns the index of that element



//console.log(myArr);
//console.log(typeof myArr);

//const newArr=myArr.join()
//console.log(newArr);
//console.log(typeof newArr);
//The join() method of Array instances creates and returns a new string by concatenating all of the elements in this array, separated by commas or a specified separator string.

//splice and slice
console.log("A",myArr);
const myn1=myArr.slice(1,3);
//returns the copy of section of an array exluding the last index

console.log(myn1);
console.log("B",myArr);

const myn2=myArr.splice(1,3)
console.log("C",myArr);
console.log(myn2);
//spice returns the copy of section of an array including the last index

/*main difference between slice and spice is that 
slice does not manipulate an original array
splice manipulates an original array
to understand the difference check the outputs  */

