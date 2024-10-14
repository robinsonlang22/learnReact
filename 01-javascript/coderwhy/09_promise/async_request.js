    function requestData(url, successCallback, errorCallback) {
    setTimeout(() => {
        if (url === "coderwhy") {
            let names = ["abc", "cba", "nba"];
            successCallback(names);
        } else {
            errorCallback();
        }
    }, 3000);
}

requestData("coderwhy", (res) => {
    console.log(res);
}, () => {
    console.log('Data not requested');
});

// better solution: promise, follow the promise A+ standard
const requestData = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (url === "coderwhy") {
            let names = ["abc", "cba", "nba"];
            resolve(names);
        } else {
            reject();
        }
    }, 3000);
});

requestData.then((res) => {
    console.log(res);
}).catch(() => {
    console.log('Data not requested');
});
