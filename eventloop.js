const axios = require("axios");
const crypto = require("crypto");
const { Stream } = require("stream");
const start = Date.now();
// const apiCalls = async () => {
//   for (let i = 0; i < 10; i++) {
//     axios
//       .get("https://jsonplaceholder.typicode.com/todos/1")
//       .then();

//   }
// };

// apiCalls();

crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
  console.log(Date.now() - start);
});

crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
  console.log(Date.now() - start);
});
