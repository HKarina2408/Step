const button = document.createElement("button");
button.textContent = "Button";

document.body.appendChild(button);

// mouse events (main)

button.onclick = () => {
  console.log(this);
  console.log("Hello from button");
};

button.ondblclick = () => {
  console.log("dbl click");
};

// hover
button.onmouseover = () => {
  console.log("Hovered");
};

button.onmouseleave = () => {
  console.log("Unhovered");
};

button.onmouseup = () => {
  console.log("Mouse up");
};

button.onmousedown = () => {
  console.log("Mouse down");
};

button.onfocus = () => {
  console.log("Fokus");
};

// system events

window.onload = () => {
  console.log("load");
};

window.onblur = () => {
  console.log("blur");
  document.title = "Come back";
};

window.onfocus = () => {
  document.title = "Document";
};

window.onclose = () => {
  console.log("Closed");
};

// inputs events

const textInput = document.createElement("input");
textInput.value = "Hello";

document.body.appendChild(textInput);

const errorElement = document.createElement("p");
errorElement.className = "error-element";

document.body.appendChild(errorElement);

const validateEmail = (value) => {
  // Завдання:
  // написати логіку що перевіряє значення value
  // містить @ та крапку (.) мінімум 6 символів, не має пробілів
  // true / false

  return (
    value.length >= 6 &&
    value.includes("@") &&
    value.includes(".") &&
    !value.includes(" ")
  );
};

textInput.onchange = (event) => {
  const validateResult = validateEmail(event.target.value);

  errorElement.textContent = "";

  if (!validateResult) {
    errorElement.textContent = "Invalid Email";
  }

  console.log(validateResult);
};

const searchInput = document.createElement("input");
searchInput.placeholder = "Search the users";
document.body.appendChild(searchInput);

const users = {
  data: ["user@email.com", "email@gmail.com", "google@gmail.com"],
  render: function (users) {
    this.wrapper.innerHTML = "";

    users.forEach((email) => {
      const div = document.createElement("div");
      div.textContent = email;
      this.wrapper.appendChild(div);
    });
  },

  wrapper: document.createElement("div"),
};

users.wrapper.className = "users-wrapper";
document.body.appendChild(users.wrapper);

users.render(users.data);

searchInput.oninput = (event) => {
  //   Завдання: зробити фільтрацію users.data за
  // критерієм наявності значення event.target.value
  const filteredUsers = users.data.filter((email) =>
    email.includes(event.target.value.toLowerCase())
  );

  users.render(filteredUsers);
};

const rangeInput = document.createElement("input");
rangeInput.type = "range";

rangeInput.onchange = (event) => {
  console.log("Change of the range input", event.target.value);
};

rangeInput.oninput = (event) => {
  console.log("Input range oninput event", event.target.value);
};

document.body.appendChild(rangeInput);

document.body.onmousemove = (event) => {
  console.log("Mousemove");
  console.log(event.pageX, event.pageY);
};

const coordsElement = {
  x: document.createElement("p"),
  y: document.createElement("p"),
};

const { x, y } = coordsElement;

x.textContent = `x: 0`;
document.body.appendChild(x);

y.textContent = `y: 0`;
document.body.appendChild(y);

document.body.onmousemove = (event) => {
  x.textContent = `x: ${event.pageX}`;
  y.textContent = `y: ${event.pageY}`;
};

// button.onclick = function (param) {
//   console.log(this);
//   console.log("Second handler");
// };
