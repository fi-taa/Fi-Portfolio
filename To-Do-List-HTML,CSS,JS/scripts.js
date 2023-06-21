let tasks = [];
      
// get references to the input field and task list
const newTaskInput = document.getElementById("new-task");
const taskList = document.getElementById("task-list");

// function to add a new task to the list
function addTask() {
  // get the new task text from the input field
  const newTaskText = newTaskInput.value;
  
  // create a new task object with a unique ID and the text
  const newTask = {
    id: Date.now(),
    text: newTaskText,
    completed: false
  };
  
  // add the task to the array
  if (newTask.text != "") {
      tasks.push(newTask);
  }
  
  // clear the input field
  newTaskInput.value = "";
  
  // update the task list
 
 updateTaskList();
}

// function to remove a task from the list
function removeTask(id) {
  // find the index of the task with the given ID
  const index = tasks.findIndex(task => task.id === id);
  
  // remove the task from the array
  tasks.splice(index, 1);
  
  // update the task list
  updateTaskList();
}

// function to toggle the completed status of a task
function toggleCompleted(id) {
  // find the task with the given ID
  const task = tasks.find(task => task.id === id);
  
  // toggle the completed status
  task.completed = !task.completed;
  
  // update the task list
  updateTaskList();
}

// function to update the task list HTML
function updateTaskList() {
  // clear the current HTML
  taskList.innerHTML = "";
  
  // create a new list item for each task
  tasks.forEach(task => {
    // create a new list item element
    const listItem = document.createElement("li");
    
    // set the text of the list item
    listItem.innerText = task.text;
    
    // if the task is completed, add the "completed" class
    if (task.completed) {
      listItem.classList.add("completed");
    }
    
    const completedCheckbox = document.createElement("input");
    completedCheckbox.type = "checkbox";
    completedCheckbox.checked = task.completed;
    completedCheckbox.addEventListener("change", () => {
      toggleCompleted(task.id);
    });
    // create a button to remove the task
    const removeButton = document.createElement("button");
    removeButton.className = "remove"
    removeButton.innerText = "X";
    removeButton.addEventListener("click", () => {
      removeTask(task.id);
    });
    
  
    
    // add the button and checkbox to the list item
    listItem.appendChild(removeButton);
    listItem.appendChild(completedCheckbox);
    
    // add the list item to the task list
    taskList.appendChild(listItem);
  });
}

// add an event listener to the "Add" button
const addButton = document.getElementById("add-task");
addButton.addEventListener("click", addTask);

// update the task list when the page loads
updateTaskList();