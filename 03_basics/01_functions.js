console.log("Ashish");
console.log("Ashish");
function namePrint(){
    console.log("Ashish")
}
namePrint();
namePrint();

function addTwoNumber(num1,num2){

    return num1+num2;
   
}
let result=addTwoNumber(2,3)
console.log(result);

function loggeduserdetail(username){
    return `${username} you have just login`
}
let user=loggeduserdetail("Ashish Arora")
console.log(user);
function calulateCart(...num){
    return num
}
console.log(calulateCart(100,200,300));

const MyObj={
    name:"Ashish",
    price:444
}
function hnadleObjects(anyObjects){
    console.log(`this is ${anyObjects["name"]} and this is ${anyObjects["price"]}`);
    console.log(`this is ${anyObjects.name} and this is ${anyObjects.price}`);
    
    
}
hnadleObjects(MyObj);
hnadleObjects({
    name:"manu",
    price:8999
})
function returnSecondArrayValue(myArray){
    return myArray[1]
}
const myArr=[12,34,556,333]
console.log(returnSecondArrayValue(myArr));