const inputRef = document.querySelector("#validation-input");

inputRef.addEventListener("blur", validatingInput);

function validatingInput() {
  if (Number(inputRef.dataset.length) === inputRef.value.trim().length) {
    inputRef.classList.add("valid");
    inputRef.classList.remove("invalid");
  } else {
    inputRef.classList.add("invalid");
    inputRef.classList.remove("valid");
  }
}
