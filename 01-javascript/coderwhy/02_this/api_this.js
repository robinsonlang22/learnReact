// setTimeout

setTimeout(() => {
    console.log(this); // window
}, 1000);

// click
const boxDiv = document.querySelector('.box');
boxDiv.onclick = function () {
    console.log(this); // boxDiv
};

boxDiv.addEventListener('click', () => {
    console.log(this); // boxDiv
});

// 高阶函数
names = ['a', 'b', 'c'];
names.forEach((item) => {
    console.log(this); // window
});


