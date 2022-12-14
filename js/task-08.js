const loginForm = document.querySelector(".login-form");
const submitBtn = document.querySelector("button");

loginForm.addEventListener("submit", handleSubmitForm);

function handleSubmitForm(event) {
  event.preventDefault();

  const data = {
    email: event.currentTarget.elements.email.value,
    password: event.currentTarget.elements.password.value,
  };
  const { email, password } = data;
  if (email === "" || password === "") {
    return alert(`Поля email и password должны быть заполнены!`);
  }
  console.log(data);
  event.currentTarget.reset();
}
