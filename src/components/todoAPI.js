const postReq = (url, data) => {
  return fetch(url, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data)
  });
};

const getAllTodo = () =>
  fetch('/api/getAllTodo').then(res => {
    return res.json();
  });

const addTodo = todo => {
  return postReq('/api/addTodo', {todo});
};

const toggleTodoStatus = todoId => {
  return postReq('/api/toggleTodoStatus', {todoId});
};

const deleteTodo = todoId => {
  return postReq('/api/deleteTodo', {todoId});
};

const updateTitle = title => {
  return postReq('/api/updateTitle', {title});
};

const deleteAllTodo = () => postReq('/api/deleteAllTodo');

export default {
  getAllTodo,
  addTodo,
  toggleTodoStatus,
  deleteTodo,
  updateTitle,
  deleteAllTodo
};
