const todoInput = document.getElementById('todo-input')
const submitBtn = document.getElementById('submit-button')
const todoList = document.getElementById('todo-list')
const resetBtn = document.getElementById('reset-button')

submitBtn.addEventListener('click', function(evt) {
  if (todoInput.value === '') return 
  const newTodo = document.createElement('li')
  newTodo.textContent = todoInput.value
  todoList.appendChild(newTodo)
  todoInput.value = ''
})

todoList.addEventListener('click', function(evt) {
  const parentNode = evt.target.parentNode
  parentNode.removeChild(evt.target)
})

resetBtn.addEventListener('click', function(evt) {
  todoList.innerHTML = ''
  todoInput.value = ''
})

