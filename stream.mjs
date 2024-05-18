import fs from "fs";

const writer = fs.createWriteStream("target.log");

writer.write("Tama\n");
writer.write("No\n");
writer.write("Nawa\n");
writer.end();

const reader = fs.createReadStream("target.log");
reader.addListener("data", (data) => {
  console.info(data.toString());
});
