//console.log(Object.getOwnPropertyDescriptors(Promise.prototype));

const promise = new Promise((resolve, reject) => {
    names = ["a", "b", "c"];
    resolve(names);
});

promise.then(res => {
    let add = 'd';
    res.push(add);
    console.log(res);
})

//then方法的返回值是一个新的promise对象
//返回普通值，作为一个新的promise对象的resolve值
promise.then(res => {
    return 111;
    //等价于
    // return new Promise((resolve, reject) => {
    //     resolve(111);
    // });  
}).then(res => {
    console.log(res);
    //return undefined
}).then(res => {
    console.log(res); //undefined
})

