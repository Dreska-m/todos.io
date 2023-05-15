// Получаем ссылки на необходимые элементы
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// Обработчик отправки формы
todoForm.addEventListener('submit', function(e) {
  e.preventDefault(); // Отменяем стандартное поведение формы

  const todoText = todoInput.value.trim(); // Получаем введенный текст

  if (todoText !== '') {
    // Создаем новый элемент списка дел
    const todoItem = document.createElement('li');
    const todoCheckbox = document.createElement('input');
    const todoTextSpan = document.createElement('span');
    const todoDeleteButton = document.createElement('button');

    todoCheckbox.type = 'checkbox'; // Устанавливаем тип чекбокса
    todoTextSpan.textContent = todoText; // Устанавливаем текст задачи
    todoDeleteButton.textContent = 'Удалить'; // Устанавливаем текст кнопки удаления

    // Добавляем обработчик события для удаления задачи
    todoDeleteButton.addEventListener('click', function() {
      todoList.removeChild(todoItem);
    });

    // Добавляем элементы в список дел
    todoItem.appendChild(todoCheckbox);
    todoItem.appendChild(todoTextSpan);
    todoItem.appendChild(todoDeleteButton);
    todoList.appendChild(todoItem);

    todoInput.value = ''; // Очищаем поле ввода
  }
});