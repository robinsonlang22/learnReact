
var nums = [1, 2, 3, 4];
// 一个参数，一个执行体，可以省略，默认有返回值
nums.forEach(item => console.log(item));

var newNums = nums.filter(item => item % 2 !== 0);
console.log(newNums);

var result = nums.filter(item => item % 2 === 0)
                 .map(item => item * 10)
                 .reduce((pre, item) => pre + item, 0);
console.log(result);

var bar = () => ({name: 'why'});
console.log(bar());


