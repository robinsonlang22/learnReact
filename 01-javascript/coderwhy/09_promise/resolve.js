const newPromise = new Promise((resolve, reject) => {
    resolve("coderwhy");
    //reject("err message");
});

const promise = new Promise((resolve, reject) => {
    //pending状态
    console.log("111111");
    resolve(newPromise);
    reject();
}).then((res) => {
    //resolved状态
    console.log("res", res);
}).catch((err) => {
    //rejected状态
    console.log("err", err);
});

const promise2 = new Promise((resolve, reject) => {
    console.log("222222");
    const obj = {   
        name: "coderwhy",
        age: 18,
        then: function(resolve, reject){
            resolve(`resolve message: ${this.age}`);
            //reject("reject message");
        }
    };
    // 如果resolve中传入的是一个对象，并且这个对象有then方法，那么会执行这个then方法，实现了thenable接口
    resolve(obj);
}).then((res) => {
    console.log("res", res);
}).catch((err) => {
    console.log("err", err);
});

