const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", onInput);

function onInput(evt) {
    if (evt.currentTarget.value) {
        output.textContent = evt.currentTarget.value;
    } else {
        output.textContent = "Anonymous";
    }
    // console.log(evt.currentTarget.value);
    // console.log(output.textContent);
}
