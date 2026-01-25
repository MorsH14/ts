interface TaskProps {
  id: number;
  title: string;
  completed: boolean;
  createdAt: Date;
}

type CreateTaskInput = {
  title: string;
};

const tasks: TaskProps[] = [];

function createTask(input: CreateTaskInput): TaskProps {
  const newTask: TaskProps = {
    id: tasks.length + 1,
    title: input.title,
    completed: false,
    createdAt: new Date(),
  };
  tasks.push(newTask);
  return newTask;
}

async function getTasks(): Promise<TaskProps[]> {
  return tasks;
}

function completeTask(id: number): void {
  const task = tasks.find((t) => t.id === id);
  if (task) {
    task.completed = true;
  }
}

function deleteTask(id: number): boolean {
  const index = tasks.findIndex((t) => t.id === id);
  if (index !== -1) {
    tasks.splice(index, 1);
    return true;
  }
  return false;
}

createTask({ title: "Learn TypeScript" });
createTask({ title: "Understand async/await" });

getTasks().then((tasks) => console.log(tasks));

completeTask(123); // try valid & invalid ids
deleteTask(123);
console.log(tasks);

export { TaskProps, createTask, getTasks, completeTask, deleteTask };
