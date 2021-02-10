const { Animal } = require("./animal");

class Cat extends Animal {
  speak() {
    console.log(`meow meow my name is ${this.name}`);
  }
}

exports.Cat = Cat;
