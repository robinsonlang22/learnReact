// async函数返回的值是一个Promise对象   
async function foo() {
    console.log("foo function start~");
    console.log("中间代码1");
    console.log("中间代码2");   
    console.log("中间代码3");
    console.log("foo function end~");
    // return 123;

    // return {
    //     then: function(resolve, reject) {
    //         resolve("234");
    //     }   
    // }

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("456");
        }, 2000);
    }); 
}

const promise = foo();
promise.then(res => {
    console.log(res);
})

