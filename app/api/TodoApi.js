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
  },
  filterTodos: (todos, showCompleted, searchText) => {
    let filteredTodos = todos;

    // Filter by showCompleted
    filteredTodos = filteredTodos.filter(todo => {
      return !todo.completed || showCompleted;
    });
    // Filter by searchText
    filteredTodos = filteredTodos.filter(todo => {
      let text = todo.text.toLowerCase();
      return searchText.length === 0 || text.indexOf(searchText) > -1;
    });

    // Sort todos with non-completed first
    filteredTodos.sort((a, b) => {
      // If we return -1 we say that a comes before than b and if we return 1 b will come first
      // If return 0 nothing will change (a and b are equals)
      if (!a.completed && b.completed) { // if a.completed is not completed and b.completed is completed
        return -1;
      } else if(a.completed && !b.completed) { // If a.completed is completed and b not
        return 1;
      } else  {
        return 0;
      }
    });
    
    return filteredTodos;
  } 
};
