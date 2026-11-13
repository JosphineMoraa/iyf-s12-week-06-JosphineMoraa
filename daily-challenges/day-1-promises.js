const wait = (milliseconds) =>
    new Promise((resolve) => setTimeout(resolve, milliseconds));

async function run() {
    console.log("Challenge 1: promise and timer");
    await wait(500);
    console.log("Done waiting!");
}

run().catch(console.error);
