// create a Set
const set = new Set();
set.add(10);
set.add(20);
set.add(30);
set.add(333);
console.log(set);

// create a Set with initial values, no duplicate values
const arrSet = new Set([10, 20, 30, 30, 333]);
console.log(arrSet);
// size
console.log(arrSet.size);
// convert to array
const arr = [...arrSet];
console.log(arr);

//set方法   
// add
arrSet.add(40);
console.log(arrSet);

// delete
arrSet.delete(40);
console.log(arrSet);

// has
console.log(arrSet.has(10));

// forEach
arrSet.forEach((item) => {
    console.log(item);
}); 
     


