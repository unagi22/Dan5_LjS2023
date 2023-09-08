const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');

let tasks = [];
let originalTasks = [];

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        tasks.push(taskText);
        originalTasks.push(taskText);
        renderTasks();
        taskInput.value = '';
    }
}

function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${task}
            <button onclick="removeTask(${index})">Remove</button>
        `;
        taskList.appendChild(li);
    });
}

function removeTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

function searchTasks() {
    const searchText = searchInput.value.trim().toLowerCase();

    if (searchText === '') {
        // Clear search results when the search input is empty
        searchResults.style.display = 'none';
        tasks = [...originalTasks]; // Restore original tasks
        renderTasks();
    } else {
        const filteredTasks = tasks.filter(task => task.toLowerCase().includes(searchText));

        if (filteredTasks.length === 0) {
            searchResults.style.display = 'none';
        } else {
            searchResults.style.display = 'block';
            searchResults.innerHTML = '';

            filteredTasks.forEach(task => {
                const resultItem = document.createElement('div');
                resultItem.textContent = task;
                resultItem.addEventListener('click', () => {
                    // Keep only the selected item and re-render the list
                    tasks = [task];
                    renderTasks();
                    searchInput.value = task;
                    searchResults.style.display = 'none';
                });
                searchResults.appendChild(resultItem);
            });
        }
    }
}

searchInput.addEventListener('focus', searchTasks);
searchInput.addEventListener('input', searchTasks);
