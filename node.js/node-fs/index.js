const { createFile, deleteFile, readFile } = require("./src/files/files");
const { getUsers, generateUsersLayout } = require("./src/users/users");
const { getTodos, generateTodosLayout } = require("./src/users/todos");

console.log("Node.js is starting");

createFile();
// deleteFile();
readFile();
generateUsersLayout();
getTodos();
generateTodosLayout();
