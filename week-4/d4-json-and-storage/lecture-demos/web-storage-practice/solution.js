document.addEventListener("DOMContentLoaded", () => {
  // TODO:
  // 1. store the values entered for email, first and last in local storage
  // 2. if values exist in local storage, pre populate relevant inputs
  // with those values

  const firstValue = localStorage.getItem("first"); // Sergey
  const lastValue = localStorage.getItem("last"); // Gridin
  const emailValue = localStorage.getItem("email"); // sergey@gmail.com

  console.log(firstValue, lastValue, emailValue);

  const first = document.getElementById("first");
  // <input type="text" id="first" placeholder="First name...">
  const last = document.getElementById("last");
  const email = document.getElementById("email");

  first.value = firstValue; // null
  last.value = lastValue;
  email.value = emailValue;

  const form = document.getElementById("my-form");

  form.addEventListener("submit", (event) => {
    // event.preventDefault();

    localStorage.setItem("first", first.value); // Sergey
    localStorage.setItem("last", last.value); // Gridin
    localStorage.setItem("email", email.value);
  });
});
