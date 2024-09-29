const name = 'kobe';
const age = 20;
const height = 180;

const info = `my name is ${name}, i am ${age} years old, i am ${height}cm tall`;

console.log(info);  

function doubleage(age) {
    return age * 2;
}

const info2 = `my age is ${doubleage(age)}`;

console.log(info2); 

//tagged template literals
function foo(m,n,a) {
    console.log(m,n,a);
}

foo`hello${name}World${age}Age`;
