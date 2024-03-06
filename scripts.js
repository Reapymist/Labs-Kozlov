const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        const taskSpan = document.createElement('span');
        taskSpan.textContent = task;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Удалить';
        deleteButton.addEventListener('click', () => {
            tasks.splice(index, 1);
            localStorage.setItem('tasks', JSON.stringify(tasks));
            renderTasks();
        });
        li.appendChild(taskSpan);
        li.appendChild(deleteButton);
        taskList.appendChild(li);
    });
}

document.getElementById('addTaskForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const taskInput = document.getElementById('task');
    tasks.push(taskInput.value);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    taskInput.value = '';
    renderTasks();
});

document.getElementById('deleteAllTasks').addEventListener('click', () => {
    tasks.splice(0, tasks.length);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasks();
});

renderTasks();