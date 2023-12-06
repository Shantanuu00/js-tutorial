const marvel_Heros=["thor","Ironman","spiderman"]
const dc_Heros=["superman","flash","batman"]
//marvel_Heros.push(dc_Heros)
//console.log(marvel_Heros);
/**Here using push method marvel_heros is accepting array 
 * as a element itself. Here dc_Heros array is an element itself
 * so it is not good to merge an array using push
 * because in javascript array can accept very datatypes
 */

//now we use concat 

const allHeros=marvel_Heros.concat(dc_Heros)
//console.log(allHeros);

//here it merging without any nesting of an array
//concat combines two or more arrays without modifying an existing array

/**difference between push and concat is that
 push adds elements in an existing array
 concat creates new array
**/

//we can also combine arrays using spread operator
const all_new_heros=[...marvel_Heros,...dc_Heros];
//console.log(all_new_heros);


//there is flat function to simplify nested array
//we can mention the depth to which we want to simplify array

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array=another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("Hitesh"))
//check whether hitesh is an array. It gives false
//Now we can convert hitesh into an array
console.log(Array.from("Hitesh"))

//Now we can discuss an interesting case which is asked in interview
//console.log(Array.from({name:"hitesh"}))
//It cannot convert into an array. It returns an empty array


let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));
//of also convert separate elements into an array it can strings or anything

