function sum(num1, num2) {
  console.log(num1 + num2, this);
}

sum.call('call', 10, 20);
sum.apply('apply', [10, 20]);

function foo() {
  console.log(this);
}


// return a new function
var newFoo = foo.bind('bind');
newFoo();
