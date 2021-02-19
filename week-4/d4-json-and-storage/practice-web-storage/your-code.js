document.addEventListener("DOMContentLoaded", () => {
  // TODO:
  // 1. store the values entered for email, first and last in local storage
  // 2. if values exist in local storage, pre populate relevant inputs
  // with those values

  // 1.

  const firstName = document.getElementById("first");
  const lastName = document.getElementById("last");
  const emailField = document.getElementById("email");

  const form = document.getElementById("my-form");

  const fname = localStorage.getItem("fname"); // => null
  const lname = localStorage.getItem("lname");
  const email = localStorage.getItem("email");

  firstName.value = fname;

  lastName.value = lname;

  emailField.value = email;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    localStorage.setItem("fname", firstName.value);
    localStorage.setItem("lname", lastName.value);
    localStorage.setItem("email", emailField.value);
  });
});
