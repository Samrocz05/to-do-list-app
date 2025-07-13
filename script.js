function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();
  
    if (taskText === "") {
      alert("Please enter a task.");
      return;
    }
  
    const li = document.createElement("li");
    li.textContent = taskText;
  
    // Toggle complete
    li.addEventListener("click", () => {
      li.classList.toggle("completed");
    });
  
    // Right-click to delete
    li.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      li.remove();
    });
  
    document.getElementById("taskList").appendChild(li);
    input.value = "";
  }
  