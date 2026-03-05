'use strict';

const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

function createTodoItem(taskText) {
  const listItem = document.createElement('li');
  listItem.className = 'todo-item';

  const contentWrapper = document.createElement('div');
  contentWrapper.className = 'todo-content';

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.setAttribute('aria-label', `Mark "${taskText}" as done`);

  const text = document.createElement('span');
  text.className = 'todo-text';
  text.textContent = taskText;

  const deleteButton = document.createElement('button');
  deleteButton.className = 'delete-btn';
  deleteButton.type = 'button';
  deleteButton.textContent = 'Delete';
  deleteButton.setAttribute('aria-label', `Delete "${taskText}"`);

  checkbox.addEventListener('change', () => {
    listItem.classList.toggle('is-done', checkbox.checked);
  });

  deleteButton.addEventListener('click', () => {
    todoList.removeChild(listItem);
  });

  contentWrapper.appendChild(checkbox);
  contentWrapper.appendChild(text);
  listItem.appendChild(contentWrapper);
  listItem.appendChild(deleteButton);

  return listItem;
}

todoForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const taskText = todoInput.value.trim();
  if (!taskText) {
    todoInput.focus();
    return;
  }

  const newTodoItem = createTodoItem(taskText);
  todoList.appendChild(newTodoItem);

  todoInput.value = '';
  todoInput.focus();
});
