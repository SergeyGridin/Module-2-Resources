document.addEventListener("DOMContentLoaded", (event) => {
  // TODO:
  // when the FORM with id 'todo-form' is submitted:
  // - create a new LI element
  // - set the inner text of the newly created LI to the value the user typed
  //   into the INPUT with id 'user-input'
  // - append the LI to the UL with id 'todo-list'
  // - reset the value of the INPUT to be an empty string

  let form = document.getElementById("todo-form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    let li = document.createElement("li");
    let input = document.getElementById("user-input");
    if (!input.value) {
      return;
    }
    console.log(input.innerText);
    li.innerText = input.value;
    let ul = document.getElementById("todo-list");
    ul.appendChild(li);
    input.value = "";
  });
});
