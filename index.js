class TaskManager {
  constructor(maxTasks = 50, initialTasks = []) {
    this.tasks = initialTasks;
    this.maxTasks = maxTasks;
  }

  addTask(task) {
    if (this.tasks.length >= this.maxTasks) {
      console.log('Task List is full. Delete some and try again!');
      return;
    }
    const newTask = {
      id: this.tasks.length + 1,
      task,
      completed: false,
    };
    this.tasks.push(newTask);
  }

  completedTask(taskId) {
    const task = this.tasks.find((task) => {
      task.id === taskId;
    });
    if (task) {
      task.completed = true;
    } else {
      console.log('Task not found');
    }
  }

  removeTask(taskId) {
    const task = this.tasks.filter((task) => {
      task.id !== taskId;
    });
  }

  getTask() {
    this.tasks.forEach((task) => {
      console.log(
        `[${task.completed ? 'x' : ' '}] Task ${task.id} : ${task.task}`
      );
    });
  }
}

const taskManager = new TaskManager(10, [
  { id: 1, task: 'Create addTask function', completed: false },
  { id: 2, task: 'Create completedTask function', completed: false },
]);

console.log('********TASK MANAGER********');
console.log(taskManager.addTask('Task 3'));
console.log(taskManager.completedTask(3));
console.log(taskManager.getTask());
