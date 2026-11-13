async function getJson(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
    }
    return response.json();
}

async function run() {
    try {
        const data = await getJson("https://jsonplaceholder.typicode.com/todos/1");
        console.log("Fetched todo:", data);
    } catch (error) {
        console.error("Could not fetch the todo:", error.message);
    }
}

run();
