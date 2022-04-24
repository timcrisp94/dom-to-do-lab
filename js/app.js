const todoInput = document.getElementById('todo-input')
const submitBtn = document.getElementById('submit-button')
const todoList = document.getElementById('todo-list')

submitBtn.addEventListener('click', function(evt) {
  if (todoInput.value === '') return
  const newTodo = document.createElement('li')
  todoInput.value = ''

})