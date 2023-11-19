//declares a class named 'Shape'
class Shape {
    //constructor to initiatize type for generic shape properties
    constructor() {
        this.type = "Shape";
    }
    //defines method within the class to calculate the area
    calculateArea() {
        console.log("Area calculation for generic shape");
        return 0;
    }
}
class Circle extends Shape {
//constructor ro initialize circle properties
    constructor(radius) {
        super(); //calls the constructor of the parent class
        this.type = "Circle";
        this.radius = radius;
    }
    calculateArea() {
        console.log(`Area calculation for Circle with radius ${this.radius}`);
        return Math.PI * this.radius ** 2;
    }
}
class Triangle extends Shape {
    //constructor to initialize Triangle properties
    constructor(base, height) {
        super(); //calls the constructor of the parent class
        this.type = "Triangle";
        this.base = base;
        this.height = height;
    }
    calculateArea() {
        console.log(`Area calculation for Triangle with base ${this.base} and height ${this.height}`);
        return 0.5 * this.base * this.height;
    }
}

//creates instances for Circle and Traingle
const circle = new Circle (10);
const triangle = new Triangle(8, 12);

//calculate and log the areas
console.log(`Area of ${circle.type}: ${circle.calculateArea()}`);
console.log(`Area of ${triangle.type}: ${triangle.calculateArea()}`);