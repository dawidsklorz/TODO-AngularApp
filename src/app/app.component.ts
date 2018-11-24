import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newTask: string = '';
  tasksToDo : Array<Task> = [];
  tasksComplete: Array<Task> = [];

  addTask() {
    this.tasksToDo.push(new Task(this.newTask, false));
  }

  delete(task) {
    this.tasksToDo = this.tasksToDo.filter(e => e !== task);
  }

  complete(task) {
    this.tasksComplete.push(task);
    this.delete(task);
  }
}

class Task {
  name: string;
  complete: boolean;

  constructor(name: string, complete: boolean) {
    this.name = name;
    this.complete = complete;
  }
}
