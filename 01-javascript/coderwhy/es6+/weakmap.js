//WeakMap 的 key 只能是对象，value 可以是任意类型

const obj1 = {name: 'why', age: 18};

//应用场景
function obj1NameFn1() {
    console.log('obj1NameFn1');
}

function obj1NameFn2() {
    console.log('obj1NameFn2');
}

function obj1AgeFn1() {
    console.log('obj1AgeFn1');
}

function obj1AgeFn2() {
    console.log('obj1AgeFn2');
}

const wm = new WeakMap();

// collect obj1's name and age
const obj1Map = new Map();
obj1Map.set("name", [obj1NameFn1, obj1NameFn2]);
obj1Map.set("age", [obj1AgeFn1, obj1AgeFn2]);
wm.set(obj1, obj1Map);

// obj1.name = "james"
const targetMap = wm.get(obj1);
const fns1 = targetMap.get("name");
const fns2 = targetMap.get("age");
fns1.forEach(fn => fn());
fns2.forEach(fn => fn());


