class Classroom {
    constructor(address, name, students) {
        this.address = address;
        this.name = name;
        this.students = students;
    }   

    entry(newStudent) {
        this.students.push(newStudent);
    }

    [Symbol.iterator]() {
        let index = 0;
        return {
            next: () => {
                return index < this.students.length ? { value: this.students[index++], done: false } : { value: undefined, done: true };
            },
            return: () => {
                console.log("迭代器提前终止了");
                return { value: undefined, done: true };
            }   
        }   
    }
}   

const classroom = new Classroom("3幢5楼201","计算机教室",["james","kobe","curry"]);      
classroom.entry("lilei");

for (const student of classroom) {
    console.log(student);
    if (student === "kobe") {
        break;
    }
}
