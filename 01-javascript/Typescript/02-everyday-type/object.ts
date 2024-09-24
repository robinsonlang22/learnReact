function printCoord(pt: { x: number; y: number }) {
  console.log(`The coordinate's x value is ${pt.x}`);
  console.log(`The coordinate's y value is ${pt.y}`);
}

printCoord({ x: 100, y: 100 });

function printName(obj: { first: string; last?: string }) {
  console.log(`${obj.first} ${obj.last}`);
}

printName({ first: "John" });
printName({ first: "John", last: "Doe" });

