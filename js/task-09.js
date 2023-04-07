const button = document.querySelector(".change-color");
const title = document.querySelector(".color");
const body = document.querySelector("body");

button.addEventListener("click", changeColor);

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

function changeColor() {
    body.style.backgroundColor = getRandomHexColor();

    title.textContent = body.style.backgroundColor;
}
