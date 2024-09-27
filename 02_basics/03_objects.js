//singleton
//Object.create
//object literals

const mySymbl= Symbol("ASH12")
const Jsuser={
    name:"Ashish",
    "fullname":"ASHISH ARORA",
    [mySymbl]:"Ash Symbol",
    age:18,
    location:"Jaipur",
    email:"ashisharora555@gmail.com",
    isLoggedIn:false,
    lastlogginDays:["monday","tuesday"]
}
console.log(Jsuser.name);
console.log(Jsuser["name"])
console.log(Jsuser["fullname"]);
console.log(Jsuser [mySymbl])
Jsuser.age=29
console.log(Jsuser.age);
//Object.freeze(Jsuser);
Jsuser.email="Ashish34@gmail.com";
console.log(Jsuser.email);
//console.log(Jsuser)
Jsuser.greeting=function (){
    console.log( "Hi good morning");
    
}
console.log(Jsuser.greeting);



