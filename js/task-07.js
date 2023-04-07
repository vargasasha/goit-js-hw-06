const control = document.querySelector("#font-size-control");
const title = document.querySelector("#text");

control.addEventListener("input", onInput);

function onInput(evt) {
    title.style.fontSize = `${evt.currentTarget.value}px`;
}
