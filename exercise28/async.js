function getMessage() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;

            if (success) {
                resolve("Operation completed successfully!");
            } else {
                reject("Operation failed");
            }
        }, 2000);
    });
}

async function displayMessage() {
    try {
        const message = await getMessage();
        console.log("Success:", message);
    } catch (error) {
        console.error("Error:", error);
    }
}

displayMessage();