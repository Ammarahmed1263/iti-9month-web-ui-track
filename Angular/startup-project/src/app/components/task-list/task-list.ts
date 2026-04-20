import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { CardComponent } from '../card/card';
import { FilterType, Task, ToastEvent } from '../todo-list/types';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.html',
  styleUrls: ['./task-list.css'],
  imports: [CardComponent],
})
export class TaskListComponent implements OnChanges {
  @Input() tasks: Task[] = [];
  @Input() filter: FilterType = 'all';
  @Output() deleteTask = new EventEmitter<number>();
  @Output() editTask = new EventEmitter<Task>();
  @Output() updateTask = new EventEmitter<Task>();
  @Output() filterChange = new EventEmitter<FilterType>();
  @Output() showToast = new EventEmitter<ToastEvent>();
  visibleTasks: Task[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    const tasksChange = changes['tasks'];
    const filterChange = changes['filter'];

    if (tasksChange || filterChange) {
      this.updateVisibleTasks();
    }
  }

  private updateVisibleTasks(): void {
    if (this.filter === 'all') {
      this.visibleTasks = this.tasks;
    } else if (this.filter === 'completed') {
      this.visibleTasks = this.tasks.filter((task) => task.completed);
    } else {
      this.visibleTasks = this.tasks.filter((task) => !task.completed);
    }
  }

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
    this.filterChange.emit(filter);
  }

  handleShowToast(event: ToastEvent): void {
    this.showToast.emit(event);
  }
}
