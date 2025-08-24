// let animal = {
//     eats: true
// }
// let rabit = {
//     jumps: true
// }

// rabit.__proto__ = animal;          // it inherit the properties of animal
// console.log(rabit.eats);

// But the proper way of classes and object is thisss....
class Animal {
    constructor(name) {
        this.name = name;
        console.log("Created");
    }

    eats() {
        console.log("Eating");
    }
    jumps() {
        console.log("Jumping");
    }
}

class Lion extends Animal {
    constructor(name, color){
        super(name);                      // it will use if you write constructor in child class also...
        this.color = "White";
        console.log("He is a lion");
    }
    roar() {
        console.log("Roaring");
    }

    jumps(){                                    // jumps funciton will over write....
        super.jumps();                          // And this will also call parent jumps funciton....
        console.log("Lion is jumping");
    }
}

// let a1 = new Animal("bunny");
// a1.eats();
// a1.jumps();
// console.log(a1.name);

let l1 = new Lion("Fadi");
l1.eats();
l1.roar();
l1.jumps();
console.log(l1.name);
console.log(l1.color);


let a2 = new Animal;
let l2 = new Lion;
console.log(l2 instanceof Lion);      // true
console.log(l2 instanceof Animal);    // true
console.log(a2 instanceof Animal);    // true
console.log(a2 instanceof Lion);      // false