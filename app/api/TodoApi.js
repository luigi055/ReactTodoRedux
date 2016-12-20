export default {
  setTodos: todos => {
    if (Array.isArray(todos)) {
      // Since localStorage just accepts strings we have todos
      // transform our array to string. so we can convert our array
      // using JSON.stringify() method
      localStorage.setItem('todos', JSON.stringify(todos)); 
      return todos;
    }
  },
  getTodos: () => {
    const stringTodos = localStorage.getItem('todos');
    let todos = [];

    try {
      // Convert string to array
      todos = JSON.parse(stringTodos);
    } catch (error) {
      // If JSON.parse method fails the todos var stays as an empty array
    }

    return (Array.isArray(todos)) ? todos : [];
  }
};
