import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { InputsComponent } from '../inputs/inputs';
import { TaskListComponent } from '../task-list/task-list';
import { ToastType } from '../toast/types';
import { FilterType, Task, ToastEvent } from './types';

@Component({
  selector: 'app-todo-list',
  imports: [TaskListComponent, InputsComponent],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoListComponent {
  @Output() showToast = new EventEmitter<ToastEvent>();
  tasks: Task[] = [];
  editingTask: Task | null = null;
  filter: FilterType = 'all';

  handleShowToast(event: ToastEvent): void {
    this.showToast.emit(event);
  }

  handleAddTask(task: Task): void {
    this.tasks = [...this.tasks, task];
    this.showToast.emit({ message: 'Task added successfully!', type: 'success' });
  }

  saveTask(task: Task): void {
    if (this.editingTask) {
      this.tasks = this.tasks.map((t) => (t.id === task.id ? task : t));
      this.showToast.emit({ message: 'Task updated successfully!', type: 'success' });
    } else {
      this.tasks = [...this.tasks, task];
      this.showToast.emit({ message: 'Task added successfully!', type: 'success' });
    }

    this.editingTask = null;
  }

  handleDeleteTask(taskId: number): void {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
    this.showToast.emit({ message: 'Task deleted successfully!', type: 'info' });
  }

  startEditingTask(task: Task): void {
    this.editingTask = task;
  }

  handleUpdateTask(updatedTask: Task): void {
    this.tasks = this.tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task));
    this.showToast.emit({ message: 'Task updated successfully!', type: 'success' });
  }

  handleFilterChange(filter: FilterType): void {
    this.filter = filter;
  }

  get filteredTasks(): Task[] {
    if (this.filter === 'all') {
      return this.tasks;
    } else if (this.filter === 'completed') {
      return this.tasks.filter((task) => task.completed);
    } else {
      return this.tasks.filter((task) => !task.completed);
    }
  }
}
