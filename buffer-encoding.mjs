const buffer = Buffer.from("tamago-san", "utf-8");

console.info(buffer.toString());
console.info(buffer.toString("hex"));
console.info(buffer.toString("base64"));

const bufferBase64 = Buffer.from("dGFtYWdvLXNhbg==", "base64");
console.info(bufferBase64.toString("utf-8"));
