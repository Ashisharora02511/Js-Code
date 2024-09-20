let myDate=new Date()
//console.log(myDate.toString);
//console.log(myDate.toLocaleString());
//console.log(myDate.toLocaleDateString());
//console.log(typeof myDate);
let myCreatedDate=new Date(2024, 9,20);
//console.log(myCreatedDate.toLocaleString());

let myTimeStamp=Date.now();
// console.log(myTimeStamp);
// console.log(myTimeStamp.toLocaleString());
// console.log(myDate.getTime())
// console.log(Math.floor(Date.now()/1000));

let newDate=new Date();
console.log(newDate);
console.log(newDate.getMonth()+1);
newDate.toLocaleString('default',{
    weekday:"long"})
