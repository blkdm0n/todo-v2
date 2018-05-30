//REQ #1 - It should have a function to display todos

var todos = [`Study algorithms`, `Whiteboarding Practice`, `Get a job with an awesome company`];

function displayTodos() {
  console.log(`Bernard's todos:`, todos);
}

//displayTodos();

//REQ #2 - It should have a function to add new todos

function addTodo(newTodo) {
  todos.push(newTodo);
  displayTodos();
}

//addTodo(`Live Happily Ever After`);

//REQ #3 - It should have a function to change a todo
// function changeTodo(indexOfCurrentTodo, updatedTodo) {
//   todos[indexOfCurrentTodo] = updatedTodo;
//   displayTodos();
// }



//REQ #3 - It should have a function to change a todo (OPTIMIZED)

function changeTodo(currentTodo, updatedTodo) {
  todos.forEach((todo, index) => {
    if (todo === currentTodo) {
      todos[index] = updatedTodo
    }
  });
  displayTodos();
}

//changeTodo(`Get a job with an awesome company`, `Study harder!!!!`);

//REQ #4 - It should have a function to delete a todo

// function deleteTodo(deletedTodoIndex) {
//   todos.splice(deletedTodoIndex, 1);
//   displayTodos();
// }

//REQ #4 - It should have a function to delete a todo (OPTIMIZED)

function deleteTodo(todoToDelete) {
  todos.forEach((todo, index) => {
    if (todo === todoToDelete) {
      todos.splice(index, 1);
    }
  })
  displayTodos();
}