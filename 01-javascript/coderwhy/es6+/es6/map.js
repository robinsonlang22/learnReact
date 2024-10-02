const obj1 = {name: 'why'};
const obj2 = {name: 'kobe'};
const obj3 = {name: 'james'};

const info = {
    [obj1]: 'aaa',
    [obj2]: 'bbb',  
}

console.log(info);

// map 的 key 可以是任何类型
const map = new Map();
map.set(obj1, 'aaa');
map.set(obj2, 'bbb');
console.log(map);

// [[key, value], [key, value]]
const map2 = new Map([  
    [obj1, 'aaa'],
    [obj2, 'bbb'],
]);
console.log(map2);

// 2.map 的 size 属性
console.log(map2.size);

// 3.map 的 get 方法
console.log(map2.get(obj1));

// 4.map 的 has 方法
console.log(map2.has(obj1));
console.log(map2.has(obj3));

map.forEach((value, key) => {
    console.log(value, key);
});

for (const [key, value] of map2) {
    console.log(key, value);
} 