function sum(a, b) {
    try {
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw "error";
        }
        return a + b;
    } catch (error) {
        console.log(error);
    }
}

console.log(sum(1, 1));
