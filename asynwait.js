// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise Resolved Value!!");
//   }, 1000);
// });

// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise Resolved Value!!");
//   }, 500);
// });

// await can only be used inside an async function
// async function handlePromise() {
//   console.log("Hello World!");

//   // JS Engine waits here until p1 resolves
//   const val = await p1;
//   console.log("Namaste JavaScript");
//   console.log(val);

//   // Then waits for p2
//   const val2 = await p2;
//   console.log("Namaste JavaScript 2");
//   console.log(val2);
// }

// handlePromise();

// await can only be used inside an async function

const API_URL = "https://invalidandomurl";

// await can only be used inside an async function
async function handlePromise() {
  const data = await fetch(API_URL);
  const jsonValue = await data.json();
  console.log(jsonValue);
}

handlePromise().catch((err) => console.log(err));
