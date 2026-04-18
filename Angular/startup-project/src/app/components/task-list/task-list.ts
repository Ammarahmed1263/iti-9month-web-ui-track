import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardComponent } from '../card/card';
import { FilterType, Task } from '../todo-list/types';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.html',
  styleUrls: ['./task-list.css'],
  imports: [CardComponent],
})
export class TaskListComponent {
  @Input() tasks: Task[] = [];
  @Input() filter: FilterType = 'all';
  @Output() deleteTask = new EventEmitter<number>();
  @Output() editTask = new EventEmitter<Task>();
  @Output() updateTask = new EventEmitter<Task>();
  @Output() setFilter = new EventEmitter<FilterType>();

  handleDeleteTask(taskId: number): void {
    this.deleteTask.emit(taskId);
  }

  handleUpdateTask(task: Task): void {
    this.updateTask.emit(task);
  }

  handleEditTask(task: Task): void {
    this.editTask.emit(task);
  }

  handleSetFilter(filter: FilterType): void {
    this.setFilter.emit(filter);
  }
}
