let tasks = [];

function addTask(newTask) {
  tasks.push({ task: "sleep", done: false });
}

function markDone(index) {
  if (tasks[index]) {
    tasks[index].done = true;
    console.log("Task found");
  } else {
    console.log("Task not found");
  }
}

function deleteTask(index) {
  if (tasks[index]) {
    tasks.splice(index, 1);
  } else console.log("Task not found");
}

function showTasks() {
  for (let i = 0; i < tasks.length; i++) {
    console.log(
      `${i + 1}. ${tasks[i].task} - ${tasks[i].done ? "✅ Done" : "❌ Not done"}`,
    );
  }
}

addTask("Buy milk");
addTask("Do homework");
addTask("Learn JS");

markDone(1);

deleteTask(0);

showTasks();

const array = ["food", "sleep", "eat"];

for (let i = 0; i < array.length; i++) {
  const doTask = array[2];
  console.log(doTask);
}
