/* global document */
/* global localStorage */

let todos = [];

const filters = {
  searchText: '',
  hideCompleted: false,
};

const todosJSON = localStorage.getItem('todos');

if (todosJSON !== null) {
  todos = JSON.parse(todosJSON);
}

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

  const summary = document.createElement('h2');
  summary.textContent = `You have ${incompleteTodos.length} todos left`;
  document.querySelector('#todos').appendChild(summary);

  filteredTodos.forEach((todo) => {
    const p = document.createElement('p');
    p.textContent = todo.text;
    document.querySelector('#todos').appendChild(p);
  });
};

renderTodos(todos, filters);

document.querySelector('#search-text').addEventListener('input', (e) => {
  filters.searchText = e.target.value;
  renderTodos(todos, filters);
});

document.querySelector('#new-todo').addEventListener('submit', (e) => {
  e.preventDefault();
  todos.push({
    text: e.target.elements.text.value,
    completed: false,
  });
  localStorage.setItem('todos', JSON.stringify(todos));
  renderTodos(todos, filters);
  e.target.elements.text.value = '';
});

document.querySelector('#hide-completed').addEventListener('change', (e) => {
  filters.hideCompleted = e.target.checked;
  renderTodos(todos, filters);
});
