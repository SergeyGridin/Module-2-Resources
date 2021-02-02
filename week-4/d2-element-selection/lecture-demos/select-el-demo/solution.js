document.addEventListener("DOMContentLoaded", () => {
  // 1. getElementById returns an element
  let header = document.getElementById("my-header");

  // 2. getElementByClassName returns an HTMLCollection
  let colorItems = document.getElementsByClassName("color__item");

  // 3. querySelectorAll returns a NodeList
  // className (.className), id (#id), tagName(tagName)
  let numberItems = document.querySelectorAll(".number__item");
  // let colorUl = document.querySelectorAll('ul')

  // 4. getElementByTagName returns an HTMLCollection
  let lists = document.getElementsByTagName("ul");

  // 5. querySelector returns an Element
  let firstLabel = document.querySelector("label");

  // ITERATING THROUGH NODE LIST

  // method #1 - using forEach
  numberItems.forEach((el) => {
    console.log(el);
  });

  // method #2 - for loop
  for (let i = 0; i < numberItems.length; i++) {
    let el = numberItems[i];
    console.log(el);
  }

  // ITERATING THROUGH HTML COLLECTIONS

  // method #1
  for (let i = 0; i < colorItems.length; i++) {
    console.log(colorItems[i]);
  }

  // this wont work:
  // colorItems.forEach(el => console.log(el));

  // method #2
  Array.from(colorItems).forEach((el) => console.log(el));

  // Difference between HTMLCollection and NodeList
  // let a = document.getElementsByTagName("ul")[1];
  // console.log(a.children);
  // console.log(a.childNodes);

  // STATIC NODE LIST VS LIVE HTML COLLECTION

  let colorList = document.getElementById("colors");

  let colorCollection = document.getElementsByClassName("color__item");
  let colorNodeList = document.querySelectorAll(".color__item");

  let newItem = document.createElement("li");
  newItem.innerText = "Purple";
  newItem.classList.add("color__item");
  colorList.appendChild(newItem);

  console.log("colorCollection Length", colorCollection.length);
  console.log("colorNodeList Length", colorNodeList.length);
});
