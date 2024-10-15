// js是单线程的，但是有同步任务和异步任务
// 同步任务在主线程上执行，异步任务通过事件循环机制来执行
// 异步任务又分为宏任务和微任务，微任务执行时机优于宏任务

// 事件循环： js thread => 其他线程(耗时操作) => 回调函数到事件队列 => js thread 执行函数
// macro task: setTimeout, ajax, DOM, UI rendering
// micro task: queueMicrotask,
// 默认仍然直接执行，除非碰到resolve, await 相当于返回 resolve(undefined): Promise, async/await

// main script
console.log("script start");

// macro task
setTimeout(() => {
    console.log("setTimeout");
}, 1000);

// micro task
queueMicrotask(() => {
    console.log("queueMicrotask");
});

// main script
const nihao = () => {
    console.log("nihao");
};
nihao();

// micro task
Promise.resolve().then(() => {
    console.log("Promise");
});

// main script
console.log("script end");
