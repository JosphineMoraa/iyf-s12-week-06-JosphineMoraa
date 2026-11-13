const waitAndReturn = (value, milliseconds) =>
    new Promise((resolve) => setTimeout(() => resolve(value), milliseconds));

async function run() {
    const results = await Promise.all([
        waitAndReturn("A", 300),
        waitAndReturn("B", 100),
        waitAndReturn("C", 200),
    ]);
    console.log("Results stay in input order:", results);
}

run().catch(console.error);
