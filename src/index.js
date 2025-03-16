document.addEventListener("DOMContentLoaded", () => {
    // your code here
    document.querySelector("form").addEventListener("submit", (event) => {
        event.preventDefault();
        const newTask = document.getElementById("new-task-description").value;
        console.log(newTask);
    });
    const li = document.createElement("li");
    li.textContent = task;
    li.appendChild(button);
    const theList = document.querySelector("#tasks");
    theList.appendChild(li);
});

