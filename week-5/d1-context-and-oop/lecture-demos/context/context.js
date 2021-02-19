// GLOBAL FUNCTIONS

function whatIsThis() {
  console.log(this);
}

whatIsThis(); // global

// OBJECT METHODS

let myObj = {
  whatIsThis: function () {
    console.log(this);
  },
};

myObj.whatIsThis(); // { whatIsThis: [Function: whatIsThis] }

// ISOLATED OBJECT METHODS

let myFunc = myObj.whatIsThis;
console.log(myFunc);
myFunc(); // global

// ACCESSING PROPERTIES/METHODS USING THIS IN OBJECT METHODS
// - we can access any methods/properties of an object using 'this'

let dog = {
  name: "belka",
  speak: function () {
    console.log(this);
    console.log(`hi my name is ${this.name}`);
  },
  changeName: function (newName) {
    this.name = newName;
    this.speak();
  },
};

dog.speak(); // hi my name is belka
dog.changeName("strelka"); // hi my name is strelka
console.log(dog);

// METHODS WITH UNEXPECTED CONTEXT

let dog2 = {
  name: "belka",
  speak: function () {
    console.log(`hi my name is ${this.name}`);
  },
  changeName: function (newName) {
    console.log(this);
    this.name = newName;
    this.speak();
  },
};

// this wont work as expected
let changeNameFunc = dog2.changeName;
changeNameFunc("bob");

dog2.changeName("bob");
console.log(dog2);

// ARROW FUNCTIONS AND CONTEXT

let user = {
  name: "sergey",
  email: "potato@gmail.com",
  changeEmailFunc: function () {
    return (newName) => {
      this.name = newName;
      this.speak();
    };
  },

  speak: function () {
    console.log(`hi my name is ${this.name}`);
  },

  printFatArrowCtx: () => {
    console.log(this);
  },

  printRegularFcnCtx: function () {
    console.log(this);
  },
};

user.printRegularFcnCtx();
