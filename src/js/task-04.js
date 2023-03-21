let counterValue = 0;

const buttonDecrementRef = document.querySelector(
  `[data-action = 'decrement']`
);

const buttonIncrementRef = document.querySelector(
  `[data-action = 'increment']`
);

const spanRef = document.querySelector("#value");

buttonDecrementRef.addEventListener("click", decrement);

buttonIncrementRef.addEventListener("click", increment);

function increment() {
  counterValue += 1;
  spanRef.textContent = counterValue;
}

function decrement() {
  counterValue -= 1;
  spanRef.textContent = counterValue;
}
