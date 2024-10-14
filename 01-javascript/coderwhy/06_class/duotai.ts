class Shape {
  getArea() {}
}

class Circle extends Shape {
  getArea() {
    return 100;
  }
}

class Square extends Shape {
  getArea() {
    return 200;
  }
}

var c = new Circle();
var s = new Square();

function calcArea(shape: Shape) {
  console.log(shape.getArea());
}

calcArea(c);
calcArea(s);