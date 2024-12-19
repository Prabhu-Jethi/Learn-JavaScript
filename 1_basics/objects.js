// Objects in JS //

// singleton // also we can create object by "Object.create"

// object literals //

const mySym = Symbol("key");

const Jsuser = {
    name: "Prabhu",
    "surname": "Jethi",
    [mySym]: "key",
    age: 20,
    location: "Cuttack",
    email: "prabhu@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday", "Saturday"]
}
// console.log(Jsuser.email); --> There is an alternative method

// console.log(Jsuser)

// console.log(Jsuser["name"])
// console.log(Jsuser["surname"])
console.log(Jsuser[mySym]);

// Jsuser.age = 21

// console.log(Jsuser["age"])

// Object.freeze(Jsuser)
// Jsuser.location = "Delhi"
// console.log(Jsuser["location"])
// console.log(Jsuser);


Jsuser.greeting = function () {
    console.log("Hello Js Dev");
}
Jsuser.greet = function () {
    console.log(`Hello Js Dev, Mr ${this.name}`);
}
console.log(Jsuser.greeting());
console.log(Jsuser.greet());




