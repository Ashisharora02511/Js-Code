//primitive
// 7 types:String,Number,Null,Undefined,Boolean,Symbol,BigInt
 const score=40;
 const scoreVAlue=129.7;
 const isloggedIn=false;
 const outsideTemp=null;
 const id=Symbol('123');
 const val=Symbol('123');
 console.log(id == val);

//Reference (Non Primitive)
// Array,Objects,Function

const heros=    ["shaktiman","naagraj","doga"];
let myObj={
    name:"ashish arora",
    age:28


    
}
//object type of
console.log(typeof myObj);

const myFunction=function(){
    console.log("hello world");
}
console.log(typeof myFunction)

// primitive value are in stack ,Heap(non primitive )
let username="ashish";
let anothername=username;
anothername="Manu arora";
console.log(username);
console.log(anothername);

let userOne={
    email:"Ashisharora555@gmail.com",
    name:"Ashish"
}
let userTwo=userOne;
userTwo.email="manuarora565@gmail.com"
console.log(userTwo.email)
console.log(userOne.email)