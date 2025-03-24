document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.querySelector("form").addEventListener("submit", (m) => {
    m.preventDefault();
    const newTask = document.getElementById("new-task-description").value;
    console.log(newTask);
    builtdtask(newTask);
  });
});
function builtdtask(task) {
  const li = document.createElement("li");
  li.textContent = task;
  const button = document.createElement("button");
  button.addEventListener("click", handledelete);
  button.textContent = "X";
  li.appendChild(button);
  const theList = document.querySelector("#tasks");
  theList.appendChild(li);
};
function handledelete(m) {
  m.target.parentNode.remove();
}
