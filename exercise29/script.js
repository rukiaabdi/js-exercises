async function fetchData() {
    console.log("Start sending data...");

    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title: "My First Post",
            body: "Learning JavaScript JSON",
            userId: 1
        })
    });

    const data = await response.json();

    console.log("Posted Data:", data);
    console.log("Data posting complete.");
}

fetchData();

console.log("This message runs immediately and is not blocked.");