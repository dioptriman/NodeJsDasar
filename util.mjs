import util from "util";

const name = "Tama";

console.info(util.format("Hello, %s"), name);

const person = {
  firstName: "Tama",
  lastName: "Rama",
};

console.info(util.format("Person : %j"), person);
