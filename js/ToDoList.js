window.onload = () => {
    let addingForm = document.querySelector("#addingForm");
    addingForm.addEventListener("submit", addName);
    const taskDeleteButton = document.getElementById("submit")
    taskDeleteButton.addEventListener("click", deleteName);
    const taskDeleteAllButton = document.getElementById("delete-all")
    taskDeleteAllButton.addEventListener("click", deleteAll);
    loadTasks();
};

function loadTasks() {
    if (localStorage.length > 0) {
        let sortedKeys = Object.keys(localStorage).sort()

        for(let i = 0; i < sortedKeys.length; i++) {
            let task_text = JSON.parse(localStorage.getItem(sortedKeys[i]));
            let li = document.createElement("li");
            li.className = "task-text";
            let deleteButton = document.createElement("button");
            deleteButton.className = "delete";
            deleteButton.onclick = "deleteName()";
            deleteButton.appendChild(document.createTextNode("x"));
            li.appendChild(document.createTextNode(task_text));
            li.appendChild(deleteButton);
            tasks.appendChild(li);
        }
    }
}

function addName(element) {
    element.preventDefault();
    let newTask = document.getElementById("task-input").value;
    if (newTask == "" || newTask == null) {
        return false;
    } else {
        localStorage.setItem(localStorage.length, JSON.stringify(newTask));
        document.getElementById("task-input").value = "";
    }
    let li = document.createElement("li");
    li.className = "task-text";
    let deleteButton = document.createElement("button");
    deleteButton.className = "delete";
    deleteButton.onclick = "deleteName()";
    deleteButton.appendChild(document.createTextNode("x"));
    li.appendChild(document.createTextNode(newTask));
    li.appendChild(deleteButton);
    tasks.appendChild(li);
}

function deleteName(element) {
    if (element.target.classList.contains("delete")) {
        let li = element.target.parentNode;
        let sortedKeys = Object.keys(localStorage).sort()
        for(let i = 0; i < tasks.childNodes.length; i++) {
            if (tasks.childNodes[i] === li) {
                tasks.removeChild(li);
                localStorage.removeItem(sortedKeys[i])
                break;
            }
        }
    }
}

function deleteAll() {
    document.getElementById("task-input").value = "";
    var taskList = document.getElementById("tasks");
    while (taskList.firstChild){
        taskList.removeChild(taskList.firstChild)
    }
    localStorage.clear()
}