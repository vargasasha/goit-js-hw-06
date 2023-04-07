let counterValue = 0;

const counter = document.querySelector("#value");
const mnsBtn = document.querySelector('button[data-action="decrement"]');
const plsBtn = document.querySelector('button[data-action="increment"]');

mnsBtn.addEventListener("click", onDicrease);
plsBtn.addEventListener("click", onIncrease);

function onDicrease() {
    counterValue -= 1;
    counter.textContent = counterValue;
}

function onIncrease() {
    counterValue += 1;
    counter.textContent = counterValue;
}
