const add = (a, b) => a + b;

console.log(add(3,5));

const toAdd = [9,5];
console.log(add(...toAdd)); //-> add(toAdd[0], toAdd[1]);
console.log('--------------Combining Arrays with spread operator---------------------');

const groupA = ['jen', 'cory'];
const groupB = ['vikram'];
const final = [...groupB, 'jhon', ...groupA];
console.log(final);
final.map(friend => {
  console.log(friend);
});

console.log('--------------spread Operator in Functions---------------------');
const person = ['Luigi', 26];
const personTwo = ['Pier', 27];

const greeter = (name, age) => console.log(`Hello, ${name}, are you ${age}?`);

greeter(...person);
greeter(...personTwo);

const names = ['Mike', 'Ben'];
const allNames = [...names, 'Luigi'];

allNames.forEach(name => console.log(`Hi, ${name}`));