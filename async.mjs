function samplePromise() {
  return Promise.resolve("tamago");
}

const name = await samplePromise();
console.info(name);
