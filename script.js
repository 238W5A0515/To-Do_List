const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Load saved tasks
showTasks();

// Add a new task
function addTask() {
    if (taskInput.value === "") {
        alert("Please enter a task!");
        return;
    }

    let li = document.createElement("li");
    li.innerHTML = taskInput.value;

    let span = document.createElement("span");
    span.innerHTML = "✖";
    li.appendChild(span);

    taskList.appendChild(li);
    taskInput.value = "";

    saveTasks();
}

// Click to check or delete tasks
taskList.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveTasks();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveTasks();
    }
});

// Save tasks in localStorage
function saveTasks() {
    localStorage.setItem("tasks", taskList.innerHTML);
}

// Show tasks from localStorage
function showTasks() {
    taskList.innerHTML = localStorage.getItem("tasks");
}
