let taskList = document.getElementById("taskList")
let taskInput = document.getElementById("taskInput")


function addTask() {
    if (taskInput.value=="") {
        window.alert("Insert a task first, Lord");
    } else {
        const liDiv = document.createElement("div");
        const newLi = document.createElement("li");
        const taskText = document.createElement("p");
        
        // Buttons Div
        const buttonDiv = document.createElement("div");
        buttonDiv.id = "button-div";

        // Remove Button
        const excludeButton = document.createElement("button");
        excludeButton.textContent = "Remove"
        excludeButton.onclick = removeTask;

         // Edit Button
        const editButton = document.createElement("button");
        editButton.textContent = "Edit"
        editButton.onclick = editTask;

        // Task entry
        buttonDiv.appendChild(excludeButton);
        buttonDiv.appendChild(editButton);
        newLi.appendChild(taskText);
        newLi.appendChild(buttonDiv);
        liDiv.appendChild(newLi)
        taskList.appendChild(liDiv);
        taskText.innerText = taskInput.value;
        taskInput.value = "";
        
    }
}

function removeTask(event) {
    console.log("excludeButton clicked")
    console.log(event.target);
    const excludeButton = event.target;
    const liParentElement = excludeButton.parentElement;
    const innerDivParentElement = liParentElement.parentElement;
    const outerDivParentElement = innerDivParentElement.parentElement;
    taskList.removeChild(outerDivParentElement);
};

function editTask() {
    console.log("editButton clicked")
    console.log(event.target);
    const editButton = event.target;
    const liParentElement = editButton.parentElement;
    const innerDivParentElement = liParentElement.parentElement;
    const outerDivParentElement = innerDivParentElement.parentElement;
    taskList.value
}