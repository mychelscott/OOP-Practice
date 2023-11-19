class Animal {
    constructor (name, height, weight){
    this.name = name;
    this.height = height;
    this.weight = weight;
}

printName() {
    console.log(`The name of this animal is ${this.name}`);
}
    showHeight() {
        console.log(`The height of this animal is ${this.height} ft`);
    }
    showWeight() {
        console.log(`The weight of this animal is ${this.weight}lbs`);
    }
}


class SeaCreature extends Animal {
    constructor (name, height, weight, canSwim) {
        super(name, height, weight);
        this.canSwim = canSwim;
    }
    swim() {
        if (this.canSwim) {
            console.log(`${this.name} is swimming.`);
        }
        else {
            console.log(`${this.name} cannot swim.`);
        }
    }
}
const ringedSealSeaCreature = new SeaCreature("seal", 5, 120, true);

ringedSealSeaCreature.printName();

ringedSealSeaCreature.swim();