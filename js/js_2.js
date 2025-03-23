// Geometry Basics: Circle Circumference in 2D
function circleCircumference(circle) {
    return Math.PI * 2 * circle.radius
}

// Training JS #12: loop statement --for..in and for..of
function giveMeFive(obj) {
    const arr = [];
    for (const key in obj) {
        if (key.length === 5) arr.push(key);
        if (obj[key].length === 5) arr.push(obj[key]);
    }
    return arr;
}

// Understanding closures - the basics
function buildFun(n) {
	let res = [];
    for (let i = 0; i < n; i++) {
        res.push(() => i);
    }
    return res;
}

// Fun with ES6 Classes #2 - Animals and Inheritance
class Animal {
    constructor(name, age, legs, species, status) {
      this.name = name;
      this.age = age;
      this.legs = legs;
      this.species = species;
      this.status = status;
    }
    introduce() {
      return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}
class Shark extends Animal {
    constructor(name, age, status) {
      super(name, age, 0, "shark", status);
    }
}
  
class Cat extends Animal {
    constructor(name, age, status) {
      super(name, age, 4, "cat", status);
    }
    introduce() {
      return `Hello, my name is ${this.name} and I am ${this.age} years old.  Meow meow!`;
    }
}
  
class Dog extends Animal {
    constructor(name, age, status, master) {
      super(name, age, 4, "dog", status);
      this.master = master;
    }
    greetMaster() {
      return `Hello ${this.master}`;
    }
}