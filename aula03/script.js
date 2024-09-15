document.getElementById('add-task').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const taskList = document.getElementById('task-list');
        const listItem = document.createElement('li');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', () => {
            listItem.classList.toggle('completed');
        });

        const span = document.createElement('span');
        span.textContent = taskText;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'X';
        removeButton.addEventListener('click', () => {
            taskList.removeChild(listItem);
        });

        listItem.appendChild(checkbox);
        listItem.appendChild(span);
        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);

        taskInput.value = '';
    }
}