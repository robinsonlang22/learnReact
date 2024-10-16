function sum(a, b) {
    try {
        if (typeof a !== 'number' || typeof b !== 'number') {
            //throw new Error('type should be number');
            throw new TypeError('type should be number');
        }
        return a + b;
    } catch (error) {
        console.log(error);
    }
}

console.log(sum(false, 1));
