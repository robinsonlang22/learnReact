// includes
const names = ["abc", "def", "ghi"];

if (names.indexOf("abc") !== -1) {
    console.log("包含abc");
}

if (names.includes("abc", 0)) {
    console.log("包含abc");
}

if (names.includes("abc", 1)) {
    console.log("包含abc");
}

console.log(names.includes("abc", 1) ? "包含abc" : "不包含abc");

// pow
console.log(Math.pow(2, 3));
console.log(2 ** 3);