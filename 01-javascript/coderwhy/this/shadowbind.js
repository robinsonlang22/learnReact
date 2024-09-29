function foo() {
  console.log(this);
}

var obj = {
  name: 'why',
  foo: foo,
};

obj.foo();

var obj1 = {
  name: 'obj1',
  foo: function () {
    console.log(this);
  },
};

var obj2 = {
  name: 'obj2',
  bar: obj1.foo,
};

obj2.bar();
