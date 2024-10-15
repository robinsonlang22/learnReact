// flat
const nums = [10, 20, [2, 3, [4, 5]], 60];
console.log(nums.flat(2));

// flatMap: map + flat(1)
const words = ['Hello earth', 'World is yours', 'ES10', 'Flat', 'Map'];
const words1 = words.map(word => word.split(' '));
console.log(words1);
const words2 = words.flatMap(word => word.split(' '));
console.log(words2);

// fromEntries
const obj = {
    name: 'John',
    age: 18,
};

const entries = Object.entries(obj);
console.log(entries);

const obj2 = Object.fromEntries(entries);
console.log(obj2);

// 应用场景
const queryString = 'name=John&age=18';
const queryParams = new URLSearchParams(queryString);

for (const param of queryParams) {
    console.log(param);
}

const obj3 = Object.fromEntries(queryParams);
console.log(obj3);

// trimStart, trimEnd
const str = ' Hello World ';
console.log(str.trim());
console.log(str.trimStart());
console.log(str.trimEnd());
  