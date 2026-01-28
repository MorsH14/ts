let tasks = [
  { task: "eat", done: false },
  { task: "sleep", done: true },
];

for (let i = 0; i < tasks.length; i++) {
  console.log(
    `${i + 1}. ${tasks[i].task} - ${tasks[i].done ? "Done" : "Not done"}`,
  );
}
