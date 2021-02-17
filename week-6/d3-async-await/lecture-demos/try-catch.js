function sum(array) {
  let sum = 0;
  try {
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
  } catch (e) {
    handleError(e);
  }
  return sum;
}

function handleError(error) {
  console.log("something happened: ", error.message);
}

let res = sum(null);
console.log(res);
