// 1.WeakSet 只能存储对象
const obj = {
    name: 'why',
    friend: {
        name: 'kobe'
    }
};

// strong reference
const s = new Set();
s.add(obj);
console.log(s); 

//  weak reference
const ws = new WeakSet();
ws.add(obj);
console.log(ws);

// 3.WeakSet 不能遍历

// 应用场景：私有属性
const personSet = new WeakSet();
class Person {
    constructor() {
        personSet.add(this);
    }
    running() {
        if (!personSet.has(this)) {
            throw new Error('Person 类的实例方法只能通过 Person 类内部调用');
        }
        console.log('running');
    }
}

const p = new Person();
p.running();
p.running.call({name: 'kobe'}); // 报错

