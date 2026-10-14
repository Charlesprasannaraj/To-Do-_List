

 // Get elements
 const taskInput = document.getElementById("taskInput");
 const addBtn = document.getElementById("addBtn");
 const taskList = document.getElementById("taskList");


// Add button click
addBtn.addEventListener("click", addTask);


// Press Enter to add
taskInput.addEventListener("keypress", function(event) {

    if (event.key === "Enter") {
        addTask();
    }

});


// Add Task Function
function addTask() {

     const taskText = taskInput.value.trim();


    // Empty check
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }


    // Create list item
    const li = document.createElement("li");
    
    li.className = "task";


    // Task text
    const span = document.createElement("span");

    span.className = "task-text";

    span.textContent = taskText;


    // Buttons container
    const buttons = document.createElement("div");

    buttons.className = "buttons";


     // Edit button
     const editBtn = document.createElement("button");

     editBtn.className = "edit-btn";

    editBtn.textContent = "Edit";


    // Delete button
    const deleteBtn = document.createElement("button");

    deleteBtn.className = "delete-btn";

    deleteBtn.textContent = "Delete";


    // Edit functionality
    editBtn.addEventListener("click", function() {

        const newTask = prompt(
            "Edit your task:",
            span.textContent
        );

        if (newTask !== null && newTask.trim() !== "") {

            span.textContent = newTask.trim();

        }

    });


    // Delete functionality
      deleteBtn.addEventListener("click", function() {

        li.remove();

     });


     // Add buttons
     buttons.appendChild(editBtn);
     buttons.appendChild(deleteBtn);


    // Add text + buttons to li
    li.appendChild(span);
    li.appendChild(buttons);


    // Add li to list
    taskList.appendChild(li);


    // Clear input
    taskInput.value = "";

    // Cursor back to input
    taskInput.focus();

}
