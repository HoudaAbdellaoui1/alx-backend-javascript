const readLine = require("readline");
const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Welcome to Holberton School, what is your name?");
rl.on("line", (input) => {
  console.log(`Your name is: ${input}`);
});

rl.on("close", () => {
  console.log("This important software is now closing");
  process.exit(0);
});