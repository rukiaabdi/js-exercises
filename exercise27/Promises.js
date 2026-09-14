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

getMessage()
    .then(message => console.log("Success:", message))
    .catch(error => console.error("Error:", error));