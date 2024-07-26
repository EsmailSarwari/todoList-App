// Select the input field and the task list
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Function to add a new task
function addTask() {
    // Get the value of the input field
    const taskText = taskInput.value;

    // Check if the input is not empty
    if (taskText.trim() !== '') {
        // Create a new list item
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create a checkbox for marking task as completed
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.onclick = function () {
            if (checkbox.checked) {
                li.classList.add('completed');
                taskList.appendChild(li); // Move to end of the list
            } else {
                li.classList.remove('completed');
                taskList.insertBefore(li, taskList.querySelector('.completed')); // Move to before the first completed task
            }
        };

        // Create a delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function () {
            taskList.removeChild(li);
        };

        // Append the checkbox and delete button to the list item
        li.insertBefore(checkbox, li.firstChild);
        li.appendChild(deleteButton);

        // Append the list item to the task list
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = '';
    }
}

// Optional: Add the ability to add a task by pressing the Enter key
taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        addTask();
    }
});
