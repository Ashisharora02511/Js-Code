const name="Ashish"
let email="ashisharora555@gamil.com"
///string old way to concate
console.log("name :"+name+"email:"+email);
//new way 
console.log(`My name is ${name} and my email is ${email}`);
console.log(name.toUpperCase());
console.log(name[0]);
const anothename=new String("Ashish Arora");
console.log(anothename.toLocaleLowerCase());
console.log(anothename.charAt(2));
console.log(anothename.indexOf('i'));
const newString=anothename.substring(0,3);
console.log(newString);
const anotherNewString =anothename.slice(-5,4);
console.log(anotherNewString)