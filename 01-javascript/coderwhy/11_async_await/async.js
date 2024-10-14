// 定义方式
// async function foo1() {

// }

// const foo2 = async () => {

// }

// class Foo {
//     async bar() {

//     }
// }   

// 执行流程
async function foo() {
    console.log("foo function start~");
    console.log("中间代码1");
    console.log("中间代码2");   
    console.log("中间代码3");
    console.log("foo function end~");
}

console.log("script start~");
foo();  
console.log("script end~");

