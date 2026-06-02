const todoList = [];

renderTodoList();

function addTodo() {
  const inputElem = document.querySelector('.js-input');
  const name = inputElem.value;
  const dateELem = document.querySelector('.js-date-input');
  const date = dateELem.value;
  todoList.push({name, date});
  inputElem.value = '';
  dateELem.value = null;

  renderTodoList();
}

function handleKeydown(event) {
  if (event.key === 'Enter') addTodo();
}

function renderTodoList() {
  todoListHtml = '';
  for(let i=0; i<todoList.length; i++) {
    const todo = todoList[i];
    const html = `
    <div>${todo.name}</div>
    <div>${todo.date}</div>
    <button class="delete" onclick="
      todoList.splice(${i}, 1);
      renderTodoList();
    ">Delete</button>
    `;  //Generating the HTML
    todoListHtml += html;
  }

  document.querySelector('.js-todo-list')
    .innerHTML = todoListHtml;
}

