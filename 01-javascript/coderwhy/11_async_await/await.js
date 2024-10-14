function requestData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve调用后，传给await的值就是resolve的参数
            resolve("123");
        }, 2000);
    });
}

async function foo() {
    // 立即执行
    const res = await 123;
    console.log("res", res);
    const res1 = await requestData();
    // await后面的代码是同步执行的，会阻塞后面代码的执行，但不会阻塞async函数外的代码执行
    // 后面的代码会等await执行完，才会执行
    // 相当于在promise的then中执行的代码
    console.log("后面的代码", res1);

    const res2 = await requestData();
    console.log("后面的代码2", res2);
}

foo();
console.log("script end~");

