const promise = new Promise((resolve, reject) => {
    resolve("fulfilled status");
});

promise.then(res => {
    console.log(res);
}).catch(error => {
    console.log(error);
}).finally(() => {
    console.log("finally");
});