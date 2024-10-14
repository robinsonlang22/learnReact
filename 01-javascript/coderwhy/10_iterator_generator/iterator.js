function createArrayIterator(array) {
    let index = 0;
    return {
        next: function() {
            return index < array.length ? { value: array[index++], done: false } 
            : { value: undefined, done: true };
        }
    };
}

const names = ["abc", "cba", "nba"];
const numbers = [18, 19, 20];

const namesIterator = createArrayIterator(names);
console.log(namesIterator.next());
console.log(namesIterator.next());
console.log(namesIterator.next());
console.log(namesIterator.next());  

const numbersIterator = createArrayIterator(numbers);
console.log(numbersIterator.next());
console.log(numbersIterator.next());
console.log(numbersIterator.next());
console.log(numbersIterator.next());

