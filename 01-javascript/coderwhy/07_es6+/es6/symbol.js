var obj = {
    name: 'kobe',
    age: 40
}

obj.name = 'curry';
console.log(obj);

let obj2 = {
    name: 'kobe',
    age: 40
}

obj2.name = 'curry';
console.log(obj2);

// Symbol
let s1 = Symbol();
let s2 = Symbol();
console.log(s1 === s2);

let s3 = Symbol('kobe');
console.log(s3.description);

// Symbol作为key
let s4 = Symbol();
let obj3 = {
    [s1]: 'kobe',
    [s4]: 'kobe'
}
console.log(obj3);

obj3[s4] = 'curry';
console.log(obj3);

console.log(Object.keys(obj3));
console.log(Object.getOwnPropertySymbols(obj3));

const skeys = Object.getOwnPropertySymbols(obj3);
for (const skey of skeys) {
    console.log(obj3[skey]);
}

// Symbol.for()
let s5 = Symbol.for('kobe');
let s6 = Symbol.for('kobe');
console.log(s5 === s6);

// Symbol.keyFor()
console.log(Symbol.keyFor(s5));
console.log(s5.description);
