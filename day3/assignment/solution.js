import fs from "fs/promises";

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

async function run() {
  try {
    const data = await fs.readFile("h.txt", "utf-8");
    console.log(data);

    await sleep(1000);

    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    console.log(await res.json());

  } catch (err) {
    console.log(err);
  }
}

run();