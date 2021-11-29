function sendTask() {
    var task = document.getElementById("task-input-text")
    var div = document.createElement("div")
    var window = document.getElementById("task-window")
    window.appendChild(div)
    window.lastElementChild.className = "task"
    window.lastElementChild.innerHTML = task.value
    createCross(window.lastElementChild)
}

function deleteTask(cross) {
    var parent = cross.parentElement
    parent.remove()
}

function createCross(task) {
    var div = document.createElement("input")
    div.setAttribute("type", "submit")
    div.setAttribute("value", "X")
    task.appendChild(div)
    task.lastElementChild.className = "cross"
    div.onclick = function () { deleteTask(div) };
}