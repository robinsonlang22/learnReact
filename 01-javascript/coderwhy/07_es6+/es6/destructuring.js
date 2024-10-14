var names = ['abc', 'cba', 'nba'];

var [name1, name2, name3, name4 = 'lang'] = names;

console.log(name1, name2, name3, name4);

var obj = {
  name: 'kobe',
  age: 40,
  height: 180,
};

var { name, age, height } = obj;

console.log(name, age, height);

var { age: newAge} = obj;

console.log(newAge);