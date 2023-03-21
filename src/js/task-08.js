const formRef = document.querySelector(".login-form");

formRef.addEventListener("submit", formSubmit);

function formSubmit(evt) {
  evt.preventDefault();

  const {
    elements: { email, password },
  } = evt.currentTarget;

  if (!email.value.trim() || !password.value.trim()) {
    return alert("Заполните все поля формы");
  }

  const data = {};

  new FormData(evt.currentTarget).forEach((value, name) => {
    data[name] = value;
  });

  console.log(data);

  formRef.reset();
}
