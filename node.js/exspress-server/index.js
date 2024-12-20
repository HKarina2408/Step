const express = require("express");
const dotevnt = require("dotenv");
const cors = require("cors");

const usersController = require("./src/controllers/users");
const todosController = require("./src/controllers/todos");

dotevnt.config();

const server = express();

const port = process.env.PORT;

server.use(express.json());
server.use(cors({ origin: "*" }));
server.use("/todos", todosController)

server.use("/users", usersController);

server.get("/", (request, response) => {
  response.send({ message: "Hello Client" });
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
