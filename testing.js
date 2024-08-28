// let s = document.querySelector("#cat");
// fetch("https://api.thecatapi.com/v1/images/search")
//   .then((res) => res.json())
//   .then((data) => {
//     s.src = data[0].url;
//   });

function doSomething() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Other things to do before completion of the promise
      console.log("Did something");
      // The fulfillment value of the promise
      resolve("Promise Resolved");
    }, 3000);
  });
}

const tester = new Promise((resolve, reject) => {
  setTimeout(function () {
    if (false) {
      resolve("Yay!");
    }
    if (true) {
      reject("Uh Oh!");
    }
  }, 3000);
});

let one = document.querySelector("#one");
let two = document.querySelector("#two");

// doSomething().then((result) => {
//   v.textContent = result;
// });

tester
  .then((result) => {
    one.textContent = result;
  })
  .catch((result) => {
    two.textContent = result;
  });
