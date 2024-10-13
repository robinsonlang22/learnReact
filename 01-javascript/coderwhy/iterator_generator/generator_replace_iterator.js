function createArrayIterator(arr) {
    let index = 0;
    return {
        next: () => {
            return index < arr.length ? { value: arr[index++], done: false } : { value: undefined, done: true };
        }
    }       
}

const names = ["james", "kobe", "curry"];
const namesIterator = createArrayIterator(names);
console.log(namesIterator.next());
console.log(namesIterator.next());
console.log(namesIterator.next());
console.log(namesIterator.next());

// generator replace iterator
function* createArrayGenerator(arr) {
    // for (const item of arr) {
    //     yield item;
    // }
    // 使用yield* 将一个可迭代对象作为生成器的参数
    yield* arr;
} 

const namesGenerator = createArrayGenerator(names);
console.log(namesGenerator.next());
console.log(namesGenerator.next());
console.log(namesGenerator.next());
console.log(namesGenerator.next());

// 2. range iterator/ generator
function createRangeIterator(start, end) {
    let index = start;
    return {
        next: () => {
            return index < end ? { value: index++, done: false } : { value: undefined, done: true };
        }
    }       
}   

const rangeIterator = createRangeIterator(10, 20);
console.log(rangeIterator.next().value);
console.log(rangeIterator.next().value);

function* createRangeGenerator(start, end) {
    let index = start;
    while (index < end) {
        yield index++;
    }
}

const rangeGenerator = createRangeGenerator(10, 20);
console.log(rangeGenerator.next());
console.log(rangeGenerator.next());

//
class Classroom {
    constructor(address, name, students) {
        this.address = address;
        this.name = name;
        this.students = students;
    }

    entry(newStudent) {
        this.students.push(newStudent);
    }

    foo = () => {
        console.log("foo function");
    }

    *[Symbol.iterator]() {
        yield* this.students;
    }
}

const classroom = new Classroom("beijing", "class1", ["james", "kobe", "curry"]);
classroom.entry("lily");
classroom.foo();

for (const stu of classroom) {
    console.log(stu);
}


