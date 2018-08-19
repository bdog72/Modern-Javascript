/* global localStorage document */

// fetch existing todos from localstorage
const getSavedTodos = () => {
  const todosJSON = localStorage.getItem('todos');

  if (todosJSON !== null) {
    return JSON.parse(todosJSON);
  }
  return [];
};

// save todos to local storage
const saveTodos = (todos) => {
  localStorage.setItem('todos', JSON.stringify(todos));
};

// Render application todos based on filters
const renderTodos = (todos, filters) => {
  let filteredTodos = todos.filter(todo => todo.text.toLowerCase().includes(filters.searchText.toLowerCase()));

  filteredTodos = filteredTodos.filter((todo) => {
    if (filters.hideCompleted) {
      return !todo.completed;
    }
    return true;
  });

  const incompleteTodos = filteredTodos.filter(todo => !todo.completed);

  document.querySelector('#todos').innerHTML = '';

  document.querySelector('#todos').appendChild(generateSummaryDOM(incompleteTodos));

  filteredTodos.forEach((todo) => {
    document.querySelector('#todos').appendChild(generateTodoDOM(todo));
  });
};

// Get the DOM elements for a individual note
const generateTodoDOM = (todo) => {
  const todoEl = document.createElement('div');
  const checkbox = document.createElement('input');
  const todoText = document.createElement('span');
  const removeButton = document.createElement('button');

  // Setup todo checkbox
  checkbox.setAttribute('type', 'checkbox');
  todoEl.appendChild(checkbox);

  // Setup the todo text
  todoText.textContent = todo.text;
  todoEl.appendChild(todoText);

  // Setup the remove button
  removeButton.textContent = 'x';
  todoEl.appendChild(removeButton);

  return todoEl;
};

// Get the DOM elements for list summary
const generateSummaryDOM = (incompleteTodos) => {
  const summary = document.createElement('h2');
  summary.textContent = `You have ${incompleteTodos.length} todos left`;
  return summary;
};
