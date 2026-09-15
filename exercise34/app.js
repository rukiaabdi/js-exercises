function addDestination() {

    const list = document.querySelector("#destinations");

    const newDestination = document.createElement("li");

    newDestination.textContent = "Paris";

    list.appendChild(newDestination);
}


function removeDestination() {

    const list = document.querySelector("#destinations");

    if (list.lastChild) {
        list.removeChild(list.lastChild);
    }
}