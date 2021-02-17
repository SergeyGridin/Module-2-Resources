const fs = require("fs").promises;
const fetch = require("node-fetch");

// Phase 2: Get a Single Person from the Star Wars API
const getPerson = async (id) => {
  const responseObject = await fetch(`https://swapi.dev/api/people/${id}`);
  const personInfo = await responseObject.json();
  return personInfo;
};

// Test for phase 2
// (async (params) => {
//   try {
//     const person = await getPerson(1);
//     console.log(person);
//   } catch (error) {
//     console.log(error);
//   }
// })();

// Phase 3: Get a Person's Homeworld and Films from the Star Wars API
const getHomeworld = async (person) => {
  const homeworld = person.homeworld;
  const responseObject = await fetch(homeworld);
  const homeworldInfo = await responseObject.json();
  return homeworldInfo;
};

// Test for getHomeworld

// (async (params) => {
//   try {
//     const person = await getPerson(1);
//     const homeworld = await getHomeworld(person);
//     console.log(homeworld);
//   } catch (error) {
//     console.log(error);
//   }
// })();

const getFilms = async (person) => {
  const fetchPromises = person.films.map((url) => fetch(url));
  const responseObjects = await Promise.all(fetchPromises);
  const filmsPromises = responseObjects.map((response) => response.json());
  const films = await Promise.all(filmsPromises);
  return films;
};

// Test for getFilms

// (async (params) => {
//   try {
//     const person = await getPerson(1);
//     const films = await getFilms(person);
//     films.forEach((film) => {
//       console.log(film.title);
//     });
//   } catch (error) {
//     console.log(error);
//   }
// })();

// Phase 4: Write the Person's Information into a File
