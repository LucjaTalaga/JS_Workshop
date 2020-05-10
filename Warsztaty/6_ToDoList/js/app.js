
document.addEventListener("DOMContentLoaded", function() {

    const taskInput = document.querySelector("#taskInput");
    const taskList = document.querySelector("#taskList");
    const addTaskButton = document.querySelector("#addTaskButton");
    const removeButton = document.querySelector("#removeFinishedTasksButton");



    addTaskButton.addEventListener("click", function(){
        if(taskInput.value.length >= 5 && taskInput.value.length <= 100){
            addTask(taskInput.value);
        }
        taskInput.value = null;
    });

    removeButton.addEventListener("click", function(){
        let tasks = taskList.children;
        console.log(tasks);
        while(taskList.lastChild){
            taskList.removeChild(taskList.firstChild);
        }
    });

    function addTask(task) {
        let newTask = document.createElement('li');
        let taskText = document.createElement('h1');
        taskText.innerText = task;
        let deleteButton = document.createElement('button');
        let completeButton = document.createElement('button');
        deleteButton.innerText = "Delete";
        completeButton.innerText = "Complete";
        newTask.appendChild(taskText);
        newTask.appendChild(deleteButton);
        newTask.appendChild(completeButton);
        taskList.appendChild(newTask);
    }
});
