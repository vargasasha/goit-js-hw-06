const input = document.querySelector("#validation-input");
const validLength = input.getAttribute("data-length");

input.addEventListener("blur", onBlur);

function onBlur(evt) {
    if (evt.currentTarget.value.length == validLength) {
        input.classList.remove("invalid");
        input.classList.add("valid");
    } else {
        input.classList.remove("valid");
        input.classList.add("invalid");
    }
}
