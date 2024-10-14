function foo(m, n = 'n'){
    console.log(m,n);
}

foo(1,2);
foo(1);
foo();
foo(0,"");

function printInfo({name, age} = {name: 'kobe', age: 20}){
    console.log(name, age);
}

printInfo();
printInfo({name: 'why', age: 40});

console.log(foo.length);

// 剩余参数
function sum(first, ...args){
    console.log(first);
    console.log(args);
}

sum(1,2,3,4,5,6,7,8,9);

