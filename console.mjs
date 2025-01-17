import { Console } from "console";
import fs from "fs";

const file = fs.createWriteStream("application.log");

const log = new Console({
  stdout: file,
  stderr: file,
});

log.info("Hello World");
log.error("Ups");

const person = {
  firstName: "Tama",
  lastName: "Rama",
};

log.table(person);
