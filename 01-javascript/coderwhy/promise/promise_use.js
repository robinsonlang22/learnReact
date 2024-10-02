class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}   

const p = new Person("why", 18);

const promise = new Promise((resolve, reject) => {
    resolve();
    reject();
})

// then方法传入的回调函数会在Promise的状态从pending变为resolved时执行
promise.then()
// catch方法传入的回调函数会在Promise的状态从pending变为rejected时执行
promise.catch()
// finally方法传入的回调函数会在Promise的状态从pending变为resolved或rejected时执行
promise.finally()

