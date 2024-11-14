// Strings and String Methods in Javascript //

const name = "prabhu";
const repocount = 8;

console.log(`hello this is ${name} and i have contributed in ${repocount} repositories.`);

const gameName = new String('prabhu-in');
// console.log(gameName[3]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('b'));

const str1 = gameName.substring(0, 3);
console.log(str1);

const str2 = gameName.slice(5);
console.log(str2);

const str3 = "  prabhu  ";
console.log(str3.trim());

const url = 'https://www.linkedin.com/in/prabhu-jethi-150007284/';
console.log(url.replace('com', 'cumming'));
console.log(url.includes('hello'));
console.log(gameName.split('_'));



