const fetch = require("node-fetch");

let apiKey = "afab3d6d";

async function fetchMovie(movie) {
  try {
    let parsedMovie = movie.split(" ").join("+");
    let response = await fetch(
      `http://www.omdbapi.com/?apikey=${apiKey}&t=${parsedMovie}`
    );
    let movieObject = await response.json();
    if (movieObject.Error) {
      throw Error(movieObject.Error);
    } else {
      parseMovie(movieObject);
    }
  } catch (err) {
    console.log("UH OH ERROR: ", err);
  }
}

function parseMovie(movie) {
  let title = movie.Title;
  let director = movie.Director;
  let year = movie.Year;

  console.log(`${title} was directed by ${director} and released in ${year}`);
}

fetchMovie("harry potter");
// Zoolander was directed by Ben Stiller and released in 2001

fetchMovie("zoolander");
// Mean Girls was directed by Mark Waters and released in 2004

fetchMovie("mean girlsssss");
// Harry Potter and the Deathly Hallows: Part 2 was directed by David Yates and released in 2011
