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
    const task = this.tasks.find((task) => task.id === taskId);
    if (task) {
      task.completed = true;
    } else {
      console.log('Task not found');
    }
  }

  removeTask(taskId) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }

  getTask() {
    this.tasks.forEach((task) => {
      console.log(
        `[${task.completed ? 'x' : ' '}] Task ${task.id} : ${task.task}`
      );
    });
  }
}
const taskManager = new TaskManager(50);

//TODO: Implement localStorage to save task to users local browser.

// TODO: select the selectors for the form
// input form task title
// input form task category
// input form task Due date
// button for addTask
// button for Reset

// DOM selectors
const taskTitle = document.getElementById('task-title');
// Category should be a dropdown
const taskCategory = document.getElementById('task-category');
// taskDueDate should be a calendar
const taskDueDate = document.getElementById('task-dueDate');
const addTaskButton = document.getElementById('add-task');

// AddItem
addTaskButton.addEventListener('click', () => {
  if (taskTitle.value.trim() === '') {
    console.log('Task cannot be empty.');
    return;
  }

  taskManager.addTask(taskTitle.value);
  taskTitle.value = ''; // this will clear it after clicked.
  console.log('Task added successfully.');
});

// Reset Form
document.getElementById('reset-form').addEventListener('click', () => {
  taskTitle.value = '';
  taskCategory.value = 'Work'; // change this to a dropdown
  taskDueDate.value = 'Tomorrow'; // change this to a calendar
});
