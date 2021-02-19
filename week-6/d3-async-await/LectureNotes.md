# PROMISE-WARMUP

# VIDEO - ASYNC/AWAIT

overview

- enable async, promise-based behavior to be written in cleaner style
- avoids the need to explicitely configure promise chains
- dont need to worry about scoping issues

Function Declaration with `async`

- creates a function that returns an implicit promise containing the result
- allows us to utilize `await` keyword inside

Awaiting Promises with `await`

- used to wait for promise to be fulfilled or rejected
- rest of code in `async` func waits until promise is fulfilled to execute
- can only use inside an `async` function

# FETCH DEMO:

```js
// must create a fetchHarryPotter function wrapper so we can use async/await

async function fetchHarryPotter() {
  try {
    let url = `http://www.omdbapi.com/?apikey=${apiKey}=harry+potter`;

    let res = await fetch(url);
    let jsonRes = await res.json();

    console.log("fetch successful!");
    console.log(jsonRes);
  } catch (err) {
    console.log("error: ", err);
  }
}

fetchHarryPotter();
```

# ASYNC-AWAIT-PRACTICE

# STAR WARS REFACTOR (starwars-solutions)

# OTHER ERROR EXAMPLE

```js
function bakeCookies() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("uh oh, burnt cookies!"));
    }, 1000);
  });
}

async function makeDessert() {
  try {
    let res = await bakeCookies();
    console.log(res);
    return "dessert is ready!!!";
  } catch (e) {
    throw new Error(`I couldn't make dessert because: ${e.message}`);
  }
}

makeDessert()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
```

# EVENT LOOP REVIEW

Overview

- the event loop has one job: moniter the call stack and callback queue
- when call stack is empty, first event from queue is pushed to the call stack

Promises

- introduced in ES6
- make writing async code easier

Job Queue

- new concept introduced in ES6 along with Promises
- promise reaction jobs (run by promise settlement) are placed in the job queue
- have higher priority than those in the callback queue
- added to call stack as soon as current thread of JS has run to completion
  - as soon as all sync code has been executed
- items from callback queue added to call stack after the job queue is empty

```js
// ASYNC / AWAIT VERSION

const hello = () => console.log("hello");
const bye = () => console.log("bye");

function timeoutFunction() {
  setTimeout(() => {
    console.log("set timeout cb executes");
  }, 0);
}

async function firstPromiseFunction() {
  let res = await new Promise((resolve, reject) => {
    resolve("first promise resolves");
  });
  console.log(res);
}

async function secondPromiseFunction() {
  let res = await new Promise((resolve, reject) => {
    resolve("first promise resolves");
  });
  console.log(res);
}

async function second() {
  let res = await new Promise((resolve, reject) => {
    resolve("second promise resolves");
  });
  console.log(res);
}

timeoutFunction();
firstPromiseFunction();
secondPromiseFunction();
hello();
bye();

// PRINTS:
// 	hello
// 	bye
// 	first promise resolves
// 	second promise resolves
// 	set timeout cb executes
```

```js
// .THEN VERSION

const hello = () => console.log("hello");
const bye = () => console.log("bye");

function timeoutFunction() {
  setTimeout(() => {
    console.log("set timeout cb executes");
  }, 0);
}

function firstPromiseFunction() {
  new Promise((resolve, reject) => {
    resolve("first promise resolves");
  })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}

function secondPromiseFunction() {
  new Promise((resolve, reject) => {
    resolve("second promise resolves");
  })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}

timeoutFunction();
firstPromiseFunction();
secondPromiseFunction();
hello();
bye();

// PRINTS:
// 	hello
// 	bye
// 	first promise resolves
// 	second promise resolves
// 	set timeout cb executes
```
