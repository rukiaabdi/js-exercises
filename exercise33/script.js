function changeContent() {

    const title = document.querySelector("#title");
    const description = document.querySelector("#description");
    const food = document.querySelector("#food");

    title.textContent = "Enjoy Our Delicious Food!";

    description.innerHTML =
        "We provide <strong>fresh and delicious meals</strong> for everyone.";

    food.innerHTML =
        "Today's special is <strong>Chicken, Rice and Salad</strong>.";
}