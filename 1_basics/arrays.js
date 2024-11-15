// Array //

const arr = [0, 1, 2, 3, 4, 5];
const myarr = ["AI", "ML"];

// *************** Array Methods ******************* //
// 1) push()
// 2) pop()
// 3) unshift()
// 4) shift()
// 5) slice()
// 6) splice()
// 7) indexof()
// 8) includes()

arr.push(6);
arr.pop();
arr.unshift(5);
arr.shift();
// console.log(arr.indexOf(3));
// console.log(arr.includes(6));
// const newarr = arr.join();
// console.log(arr);
// console.log(newarr);

// myarr.push("Webdev");
// console.log(myarr);


// ******* slice, splice ********* //

// console.log("A ", arr);
// const myn1 = arr.slice(1, 3);

// console.log(myn1);
// console.log("B ", arr);

// const myn2 = arr.splice(1, 3)
// console.log("C ", arr);
// console.log(myn2);



const india_O = ["Virat", "Rohit", "Hardik", "Bumrah", "Sunder"];
const aussie_O = ["Smith", "Head", "Pat", "Starc", "Lyon"];

// console.log(india_O[0][0]);

// const ia_O = india_O.concat(aussie_O);
// console.log(ia_O);

// const all_team = [...india_O, ...aussie_O];
// console.log(all_team);


// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
// console.log(another_array);

// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);

// console.log(Array.isArray("Prabhu")) // false 
// console.log(Array.from("Prabhu")) // true 
// console.log(Array.from({ name: "Prabhu" })) // blank

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));