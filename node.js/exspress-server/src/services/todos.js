class TodoService {
    static todos = new Array(5).fill(null).map((_, i) => ({
      id: i,
      task: `Task-${i}`,
      completed: Math.random() < 0.5,
    }));
  
    static getAll = () => TodoService.todos;
  
    static getOne = (id) => {
      return TodoService.todos.find((todo) => todo.id === id);
    };
  
    static create = (todo) => {
      TodoService.todos.push(todo);
    };
  }
  
  module.exports = TodoService;
  