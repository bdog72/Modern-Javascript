const todos = [
  {
    text: 'Order cat food',
    completed: false,
  },
  {
    text: 'Clean kitchen',
    completed: true,
  },
  {
    text: 'Buy food',
    completed: true,
  },
  {
    text: 'Do work',
    completed: false,
  },
  {
    text: 'Exercise',
    completed: true,
  },
];

const sortTodos = function (todos) {
  todos.sort((a, b) => {
    if (!a.completed && b.completed) {
      return -1;
    } if (!b.completed && a.completed) {
      return 1;
    }
    return 0;
  });
};

const deleteTodo = function (todos, todoText) {
  const index = todos.findIndex(todo => todo.text.toLowerCase() === todoText.toLowerCase());

  if (index > -1) {
    todos.splice(index, 1);
  }
};

const getThingsToDo = function (todos) {
  return todos.filter(todo => !todo.completed);
};

sortTodos(todos);
console.log(todos);

// console.log(getThingsToDo(todos))

// deleteTodo(todos, '!!buy food')
// console.log(todos)
