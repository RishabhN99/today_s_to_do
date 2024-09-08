// Get references to the input field, add button, task list, and progress bar
const taskInput = document.getElementById('new-task');
const addTaskButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');
const progressBar = document.getElementById('progress');

// Function to update the progress bar
function updateProgressBar() {
    const totalTasks = taskList.getElementsByTagName('li').length;
    const completedTasks = taskList.querySelectorAll('input[type="checkbox"]:checked').length;

    // Calculate the percentage of tasks completed
    const progressPercentage = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;

    // Update the width of the progress bar to reflect the percentage
    progressBar.style.width = `${progressPercentage}%`;
}

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();  // Get task input value and trim whitespace

    if (taskText !== '') {
        // Create a new list item for the task
        const newTaskItem = document.createElement('li');

        // Create a checkbox for the task
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        // Update progress bar when the checkbox is toggled
        checkbox.addEventListener('change', updateProgressBar);

        // Append the checkbox and task text to the list item
        newTaskItem.appendChild(checkbox);
        newTaskItem.appendChild(document.createTextNode(` ${taskText}`));

        // Add the new task to the task list
        taskList.appendChild(newTaskItem);

        // Clear the input field
        taskInput.value = '';

        // Update the progress bar
        updateProgressBar();
    }
}

// Add event listener to the "Add Task" button
addTaskButton.addEventListener('click', addTask);

// Optional: Allow pressing "Enter" to add a task
taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});


