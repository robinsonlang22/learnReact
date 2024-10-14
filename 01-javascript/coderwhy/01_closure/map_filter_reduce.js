var nums = [1, 2, 3, 4, 5];

var newNums = [];
for (var i = 0; i < nums.length; i++) {
    var num = nums[i];
    if (num % 2 === 0) {
        newNums.push(num);
    }
}

console.log(newNums);

// 过滤器 filter(item, index, array) => boolean
// 1, 0, [1, 2, 3, 4, 5] => false
// 2, 1, [1, 2, 3, 4, 5] => true
var newNums2 = nums.filter(n => n % 2 === 0);
console.log(newNums2);

// 映射器 map(item, index, array) => item
// 1, 0, [1, 2, 3, 4, 5] => 2
var newNums3 = nums.map(n => n * 2);
console.log(newNums3);

// 遍历器 foreach(item, index, array) => void
// 1, 0, [1, 2, 3, 4, 5] => void
var newNums4 = nums.forEach(item => {
    console.log(item);
}); 

// 累加器 reduce(pre, cur, index, array) => pre 
// 0, 1, 0, [1, 2, 3, 4, 5] => 1
// 1, 2, 1, [1, 2, 3, 4, 5] => 3
// 3, 3, 2, [1, 2, 3, 4, 5] => 6
// 6, 4, 3, [1, 2, 3, 4, 5] => 10
// 10, 5, 4, [1, 2, 3, 4, 5] => 15  
var newNums5 = nums.reduce((pre, cur) => pre + cur, 0);
console.log(newNums5);

// 查找器 find/findIndex
var friends = [
    {name: 'John', age: 20},
    {name: 'Jane', age: 21},
    {name: 'Jim', age: 22}
];

const findFriend = friends.find(item => item.name === 'John');
console.log(findFriend);

const findFriendIndex = friends.findIndex(item => item.name === 'John');
console.log(findFriendIndex);

