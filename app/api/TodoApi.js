export default {
  filterTodos: (todos, showCompleted, searchText) => {
    let filteredTodos = todos;

    // Filter by showCompleted
    filteredTodos = filteredTodos.filter(todo => {
      return !todo.completed || showCompleted;
    });
    // Filter by searchText
    filteredTodos = filteredTodos.filter(todo => {
      let text = todo.text.toLowerCase();
      return searchText.length === 0 || text.indexOf(searchText.toLowerCase()) > -1;
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
