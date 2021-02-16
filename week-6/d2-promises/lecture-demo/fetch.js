const fetch = require("node-fetch");

// what is fetch?
// console.log(fetch)

// what does fetch return?
// console.log(fetch('https://api.github.com/users/github'))

fetch("https://api.github.com/users/SergeyGridin", {})
  .then((res) => res.json())
  .then((userInfo) => console.log(userInfo))
  .catch((reason) => {
    console.log("rejected because", reason);
  });

// API KEYS

let apiKey = "afab3d6d&t";

fetch(`http://www.omdbapi.com/?apikey=${apiKey}=harry+potter`)
  .then((res) => res.json())
  .then((jsonRes) => {
    // printing the json jsonResponse object
    console.log(jsonRes);
    // returning json obj so that it is passed to the next .then()
    return jsonRes;
  })
  .then((jsonRes) => {
    // keying into json res obj at key "Title" + printing
    console.log("title: ", jsonRes.Title);
  })
  .catch((err) => console.log(err));
