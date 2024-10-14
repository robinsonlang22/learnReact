function requestData(url) {
    // 1. 创建一个新的Promise对象   
    return new Promise((resolve, reject) => {
        // 2. 在Promise中执行异步代码
        setTimeout(() => {
            if (url === "coderwhy") {
                let names = ["abc", "cba", "nba"];
                resolve(names);
            } else {
                let errMsg = "Data not requested";
                reject(errMsg);
            }
        }, 3000);
    });
}

// 3. 调用Promise的then方法和catch方法
requestData("coderwhy").then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});
