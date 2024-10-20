var obj = {
    name: 'why',
    foo: function () {
        console.log(this);
    },
};

// 显示绑定优先级高于隐式绑定
obj.foo(); // obj
//obj.foo.call("abc"); // abc
var bar = obj.foo.bind("cba");
bar(); // cba

// bind  
var obj2 = {
    name: 'ooo',
    foo: obj.foo.bind("ooo"),
};

obj2.foo(); // ooo  

// new 
var f = new obj.foo();

//new 绑定优先级高于 bind

