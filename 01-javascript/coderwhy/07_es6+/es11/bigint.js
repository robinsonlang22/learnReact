const maxInt = Number.MAX_SAFE_INTEGER;
console.log(maxInt);
console.log(maxInt + 1);
console.log(maxInt + 2);

// n 表示 bigint
const bigInt = 1234567890123456789012345678901234567890n;
console.log(bigInt);
console.log(bigInt + 1n);
console.log(bigInt + BigInt(2));

// nullish coalescing operator, 给undefined和null设置默认值
const foo = null;
const bar = foo ?? 'default value';
console.log(bar);

const baz = undefined;
const qux = baz ?? 'default value';
console.log(qux);

const num = 0;
const num2 = num ?? 'default value';
console.log(num);

