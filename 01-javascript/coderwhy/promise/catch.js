const promise = new Promise((resolve, reject) => {
    reject("rejectted status");
    //throw new Error("error");
});

//等价于
// promise.then(undefined, error => {
//     console.log(error);
// });

promise.then(res => {
    console.log(res);
}).catch(error => {//catch方法的回调函数，相当于then方法的第二个参数,仍然指向原来的promise对象
    console.log(error);
});