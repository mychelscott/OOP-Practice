class Animal {
    constructor (type, height, weight);
    this.type = type;
    this.height = height;
    this.weight = weight;
}

printType() {
    console.log(`The type of this animal is` ${this.type}`);
}
    showHeight() {
        console.log(`The height of this animal is ${this.height} ft`);
    }
    showWeight() {
        console.log(`The weight of this animal is ${this.weight}lbs`);
    }
}
const ringedSeal = new Animal("seal", 5, 120);

//print the type of the ringedSeal
ringedSeal.printType();