function foo() {
    throw new Error('error');
}

function bar() {
    try {
        foo();
    } catch (error) {
        console.log(error);
        // alert(error.message);
    } finally { // 无论是否发生错误，都会执行
        console.log('finally');
    }
}

bar();

// 后续代码继续执行
console.log('end');

