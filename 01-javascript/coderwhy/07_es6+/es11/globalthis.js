// globalThis 指向全局对象，在浏览器中是 window，在 Node.js 中是 global
console.log(globalThis);

// for in 遍历对象
const obj = {
    name: 'John',
    age: 18,
};

for (const key in obj) {
    console.log(key, obj[key]);
}