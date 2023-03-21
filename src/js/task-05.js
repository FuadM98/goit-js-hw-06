const inputRef = document.querySelector("#name-input");
const spanRef = document.querySelector("#name-output");

inputRef.addEventListener("input", updateSpanContent);

function updateSpanContent() {
  spanRef.textContent = inputRef.value;
  if (inputRef.value.trim() === "") {
    spanRef.textContent = "Anonymous";
  }
}
