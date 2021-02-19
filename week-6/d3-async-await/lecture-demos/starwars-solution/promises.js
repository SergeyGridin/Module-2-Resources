const fs = require("fs").promises;
const fetch = require("node-fetch");

// Phase 2: Get a Single Person from the Star Wars API
const getPerson = (id) => {
  return fetch(`https://swapi.dev/api/people/${id}`).then((res) => {
    return res.json();
  });
};

// Test for phase 2
// getPerson(1).then((person) => console.log(person));

// Phase 3: Get a Person's Homeworld and Films from the Star Wars API
const getHomeworld = (person) => {
  const homeworld = person.homeworld;
  return fetch(homeworld).then((res) => res.json());
};

// Test for getHomeworld
// getPerson(1)
//   .then((person) => {
//     return getHomeworld(person);
//   })
//   .then((homeworld) => console.log(homeworld));

const getFilms = (person) => {
  const films = person.films.map((url) => {
    return fetch(url).then((res) => res.json());
  });

  return Promise.all(films);
};

// Test for getFilms
// getPerson(1)
//   .then((person) => getFilms(person))
//   .then((films) => {
//     films.forEach((film) => console.log(film));
//   });

// Phase 4: Write the Person's Information into a File
const writePersonToFile = (person, homeworld, films) => {
  const filmTitles = films.map((film) => film.title);
  let fileContents = `My name is ${person.name}, I am from ${homeworld.name}\n`;
  fileContents += `I starred in the following films: ${filmTitles.join(", ")}`;
  return fs.writeFile(`${person.name}.txt`, fileContents, "utf-8");
};

// getPerson(1)
//   .then((person) => {
//     return Promise.all([person, getHomeworld(person), getFilms(person)]);
//   })
//   .then(([person, homeworld, films]) => {
//     return writePersonToFile(person, homeworld, films);
//   })
//   .then(() => console.log("success"))
//   .catch((err) => console.log(err));
