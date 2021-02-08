// This constructor function defines
// a `Book` object type.
function Book(title, series, author) {
  this.title = title;
  this.series = series;
  this.author = author;
}

// Use the `new` keyword to create
// three instances of the `Book` object type.

const fellowshipOfTheRing = new Book(
  "The Fellowship of the Ring",
  "The Lord of the Rings",
  "J.R.R. Tolkien"
);

const twoTowers = new Book(
  "The Two Towers",
  "The Lord of the Rings",
  "J.R.R. Tolkien"
);

const returnOfTheKing = new Book(
  "The Return of the King",
  "The Lord of the Rings",
  "J.R.R. Tolkien"
);

// Logging each instance to the console
// shows that each is a `Book` object type.

console.log(fellowshipOfTheRing); // Book { title: 'The Fellowship of the Ring', ... }
console.log(twoTowers); // Book { title: 'The Two Towers', ... }
console.log(returnOfTheKing); // Book { title: 'The Return of the King', ... }

// Comparing each instance to the others
// shows that each instance is a unique object
// and not equal to the others even though they
// are all `Book` object types.

console.log(fellowshipOfTheRing === twoTowers); // false
console.log(fellowshipOfTheRing === returnOfTheKing); // false
console.log(twoTowers === returnOfTheKing); // false

// Get the prototypes for both `Book` instances.
const fellowshipOfTheRingPrototype = Object.getPrototypeOf(fellowshipOfTheRing);
const twoTowersPrototype = Object.getPrototypeOf(twoTowers);

// Compare the `fellowshipOfTheRing` and `twoTowers` prototypes
// to the `Book` constructor function's `prototype` property.
console.log(fellowshipOfTheRingPrototype === Book.prototype); // true
console.log(twoTowersPrototype === Book.prototype); // true

// Compare the `fellowshipOfTheRing` and `twoTowers` prototypes
// to each other.
console.log(fellowshipOfTheRingPrototype === twoTowersPrototype); // true
