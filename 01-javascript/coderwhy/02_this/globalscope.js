// browser: window
// node: {}
//console.log(this);

function foo() {
  console.log(this);
}

foo();

var obj = {
  name: 'why',
  foo: foo,
};

obj.foo();

foo.apply('abc');
