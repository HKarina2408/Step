const express = require("express");
const TodoService = require('../services/todos');

const todosController = express.Router();

todosController.get("/", (_, response) => {
  const todos = TodoService.getAll();
  response.status(200).send(todos);
});

todosController.post("/", (request, response) => {
  TodoService.create(request.body);
  response.status(201).send({ message: "Todo was created"});
});

module.exports = todosController;
