const iterableObj = {
    names: ["abc", "cba", "nba"],
    [Symbol.iterator]: function () {
        let index = 0;
        return {
            next: () => {
                return index < this.names.length ? { value: this.names[index++], done: false } 
                : { value: undefined, done: true };
            }
        }
    } 
}

// const iterableObjIterator = iterableObj[Symbol.iterator]();
// console.log(iterableObjIterator.next());
// console.log(iterableObjIterator.next());
// console.log(iterableObjIterator.next()); 
// console.log(iterableObjIterator.next()); 

for (const item of iterableObj) {
    console.log(item);
}

