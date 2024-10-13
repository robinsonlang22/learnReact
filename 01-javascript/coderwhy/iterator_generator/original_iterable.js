// 原生迭代器
// 场景：for of，展开语法，解构语法
const names = ["abc", "cba", "nba"];

console.log(names[Symbol.iterator]);

const iterator = names[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());   

for (const item of names) {
    console.log(item);
}

// map/set
const set = new Set();
set.add(10);
set.add(20);
set.add(30);    

const setIterator = set[Symbol.iterator]();
for (const item of set) {
    console.log(item);
}   

//arguments
function foo(x,y,z) {   
    console.log(arguments);
    console.log(arguments[Symbol.iterator]);
    for (const args of arguments) {
        console.log(args);
    }
}

foo(10,100,1000);



