const myArr=[0,1,2,3,4,5,6,7,true,"Ashish"];
 console.log(myArr);
// console.log(myArr[5]);
// const newArray=new Array(1,2,3,43);
// console.log(newArray);
// console.log(typeof newArray);
// console.log(typeof myArr);
// // array methods
// myArr.push(56);
// console.log(myArr);
// console.log(myArr.pop());
// console.log(myArr);
//myArr.shift(8);
console.log(myArr);
myArr.unshift(34);
console.log(myArr);
myArr.shift();
console.log(myArr);
myArr.shift();
console.log(myArr);
console.log(myArr.includes(9));
console.log(myArr.indexOf(3));
const newArr=myArr.join()
console.log(newArr);
console.log(typeof newArr)
//slice and splice
console.log(myArr.slice(1,4));
console.log(myArr);
console.log(myArr.splice(2,5));
console.log(myArr);