const submitBtn = document.getElementById("submit");
const task = document.getElementById("taskInput");
const taskList = document.getElementById("list");


submitBtn.addEventListener("click", () => {
   
    let taskTitle = task.value;

    if (!taskTitle) {
        alert("Write a title");
    }

    else {
        createTask(taskTitle);

        task.value = "";
        task.focus();
    }
    

})

function createTask(taskTitle) {
    
    const taskItem = document.createElement("li")
    const completeTask = document.createElement("input");
    const title = document.createElement("h6");
    const removeBtn = document.createElement("button");

    completeTask.type ="checkbox";
    title.textContent = taskTitle;
    title.className = "taskTitle";
    removeBtn.textContent = "Delete";

    removeBtn.addEventListener("click", () => {
        taskList.removeChild(taskItem);
    })

    completeTask.addEventListener("click", () => {
        taskList.removeChild(taskItem);
    })

    taskList.appendChild(taskItem);
    taskItem.appendChild(completeTask);
    taskItem.appendChild(title);
    taskItem.appendChild(removeBtn);
   
}