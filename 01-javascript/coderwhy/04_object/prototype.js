var obj = {
  name: 'kobe',
};

console.log(obj.__proto__);
obj.__proto__.age = 40;
console.log(obj.age);

function foo() {}
console.log(foo.__proto__);
console.log(foo.prototype);
