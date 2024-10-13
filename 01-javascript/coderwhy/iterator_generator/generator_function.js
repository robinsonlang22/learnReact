function* foo() {
    console.log("函数开始执行");
    const value = 100;
    yield value;
    console.log("函数执行结束");
}

const generator = foo();
console.log(generator.next());
console.log(generator.next());
//generator.return("123");
//generator.throw("error");



