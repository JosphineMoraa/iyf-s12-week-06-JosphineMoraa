const wait = (milliseconds) =>
    new Promise((resolve) => setTimeout(resolve, milliseconds));

async function loadStep(name, milliseconds) {
    await wait(milliseconds);
    console.log(`Completed ${name}`);
    return name;
}

async function run() {
    const first = await loadStep("step one", 200);
    const second = await loadStep("step two", 200);
    console.log("Sequence:", first, "then", second);
}

run().catch(console.error);
