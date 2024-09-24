const fs = require("fs").promises;
const { createFile } = require("../files/files");

function getTodos() {
  return fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .catch((err) => console.error("Error fetching todos:", err));
}

function generateTodosLayout() {
  getTodos().then((todos) => {
    let content = "";

    const todoFilePromises = todos.map(({ id, title, completed }) => {
      content += `
        <div class="todo-card">
          <h3>${title}</h3>
          <p>Completed: ${completed ? "Yes" : "No"}</p>
          <a href="./todos/todo-${id}.html">Details</a>
        </div>
      `;

      createFile(
        `./src/files/storage/todos/todo-${id}.html`,
        `
          <head>
            <title>Todo ${id}</title>
          </head>
          <body>
            <h1>${title}</h1>
            <p>Completed: ${completed ? "Yes" : "No"}</p>
            <script src="../../../../client/todo.js"></script>
          </body>
        `
      );
    });

    Promise.all(todoFilePromises)
      .then(() => fs.appendFile("./src/files/storage/todos.html", content))
      .catch((err) => console.error("Error creating user files:", err));
  });
}

module.exports = {
  getTodos,
  generateTodosLayout,
};
