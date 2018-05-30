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

addTodo(`Live Happily Ever After`);