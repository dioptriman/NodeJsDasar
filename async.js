function samplePromise() {
  return Promise.resolve("tamago");
}

async function run() {
  const name = await samplePromise();
  console.info(name);
}

run();
