const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("11111");
    }, 1000)
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        //resolve("22222");
        reject("22222");
    }, 500)
});

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("33333");
    }, 3000)
});

// 只要有一个失败，则全部失败
Promise.all([p1, p2, p3]).then((res) => console.log("res:", res)).catch((err) => console.log("err:", err));
// 全部执行完毕，不管成功还是失败
Promise.allSettled([p1, p2, p3]).then((res) => console.log("res:", res)).catch((err) => console.log("err:", err));
// 只要有一个执行完毕，则全部执行完毕
Promise.race([p1, p2, p3]).then((res) => console.log("res:", res)).catch((err) => console.log("err:", err));
// 只要有一个成功，则全部成功
Promise.any([p1, p2, p3]).then((res) => console.log("res:", res)).catch((err) => console.log("err:", err));
