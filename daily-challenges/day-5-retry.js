async function retry(operation, attempts = 3, delayMs = 500) {
    if (!Number.isInteger(attempts) || attempts < 1) {
        throw new RangeError("attempts must be a positive integer");
    }

    let lastError;
    for (let attempt = 1; attempt <= attempts; attempt += 1) {
        try {
            return await operation();
        } catch (error) {
            lastError = error;
            if (attempt < attempts) {
                await new Promise((resolve) => setTimeout(resolve, delayMs));
            }
        }
    }

    throw lastError;
}

async function run() {
    let calls = 0;
    const result = await retry(async () => {
        calls += 1;
        if (calls < 3) throw new Error("Temporary failure");
        return "Succeeded on the third attempt";
    });
    console.log(result);
}

run().catch((error) => {
    console.error("Retry challenge failed:", error.message);
    process.exitCode = 1;
});
