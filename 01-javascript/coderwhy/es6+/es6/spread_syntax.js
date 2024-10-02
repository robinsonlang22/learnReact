const names = ['abc', 'cba', 'nba'];
const name = 'why';
const info = {name: 'kobe', friends: {name: 'james'}};

function foo(name1, name2, name3){
    console.log(name1, name2, name3);
}

foo(...names);

const newNames = [...names];
console.log(newNames);

//ES9 对象字面量的扩展
const newInfo = {...info, name: 'why', address: '洛杉矶'};
console.log(newInfo);

// 展开运算符是浅拷贝
const info2 = {name: 'kobe', age: 40};
const newInfo2 = {...info2};
console.log(newInfo2);

// 展开运算符是浅拷贝
const obj = {...info};
console.log(obj);
obj.friends.name = 'curry';
console.log(obj);
console.log(info); // 浅拷贝，friends是同一个对象

// 进制
const num1 = 100;
const num2 = 0b100;
const num3 = 0o100;
const num4 = 0x100;

console.log(num1, num2, num3, num4);


