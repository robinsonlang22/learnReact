var name = "why"

var foo = () => {
    console.log(this);
}

foo();

var obj = {foo: foo};
obj.foo();

foo.call("abc");

// 箭头函数没有 this 绑定，会捕获其外层作用域的 this 绑定
// 箭头函数没有 arguments 绑定，但可以用 rest 参数代替
// 箭头函数不能用作构造函数，不能使用 new 关键字
// 箭头函数没有原型对象，即没有 prototype 属性
// 箭头函数不能用作 generator 函数，不能使用 yield 关键字

var obj = {
    data: [],
    getData: function() {
        return new Promise((resolve, reject) => {   
            setTimeout(() => {
                var result = ["abc", "cba", "nba"];
                this.data = result;
                resolve(this.data);
            }, 1000);
        });
    }
}

obj.getData().then(data => {
    console.log(data);
});