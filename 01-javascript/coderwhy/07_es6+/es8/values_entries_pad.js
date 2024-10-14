const obj = {
    name: 'John',
    age: 18,
};

console.log(Object.values(obj));
console.log(Object.entries(obj));

const objEntries = Object.entries(obj);

objEntries.forEach(([key, value]) => {
    console.log(key, value);
});

for (const [key, value] of objEntries) {
    console.log(key, value);
}

// string padding
const message = 'Hello World';
const newMessage = message.padStart(15, '*').padEnd(20, '-');
console.log(newMessage);

const cardNumber = '1234567890123456';
const lastFourDigits = cardNumber.slice(-4);
const finalCard = lastFourDigits.padStart(cardNumber.length, '*');
console.log(finalCard);

// trailing commas
function foo(a, b,) {
    console.log(a, b,);
}

foo(1, 2,);

console.log(Object.getOwnPropertyDescriptors(obj));
