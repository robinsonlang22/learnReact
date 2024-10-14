function foo() {
  console.log(this);
}

// 独立调用
foo();

var obj = {
  name: 'why',
  foo: function () {
    console.log(this);
  },
};

bar = obj.foo;
bar(); // window, 看调用方式


