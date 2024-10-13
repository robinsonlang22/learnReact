// 需求
// url: why -> res: why
// url: res + "aaa" -> res: whyaaa

const co = require("co");

function requestData(url) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(url);
        }, 1000);
    });
}

// 第一种方案 回调地狱
requestData("why").then(res => {
    return requestData(res + "aaa").then(res =>{
        return requestData(res + "bbb").then(res => {
            console.log(res);
        });
    });
})

// 第二种方案 Promise链式调用
requestData("why").then(res => {
    return requestData(res + "aaa");
}).then(res => {
    return requestData(res + "bbb");
}).then(res => {
    console.log(res);
})

// 第三种方案 Promise + generator
function* getData() {
    let res1 = yield requestData("why");
    let res2 = yield requestData(res1 + "aaa");
    let res3 = yield requestData(res2 + "bbb");
    console.log(res3);
}

// const generator = getData();
// generator.next().value.then(res => {
//     generator.next(res).value.then(res => {
//         generator.next(res).value.then(res => {
//             generator.next(res);
//         });
//     });
// })

// 自己实现co库
function execGenerator(genFn) {
    const generator = genFn();
    function exec(res) {
        const result = generator.next(res);
        if (result.done) {
            return result.value;
        }
        result.value.then(res => {
            exec(res);
        });
    }
    exec(); 
}

// 第三方库 co
co(getData);

// 第四种方案 ES8 async/await
async function getDataAsync() {
    let res1 = await requestData("why");
    let res2 = await requestData(res1 + "aaa");
    let res3 = await requestData(res2 + "bbb");
    console.log(res3);  
}

getDataAsync();


