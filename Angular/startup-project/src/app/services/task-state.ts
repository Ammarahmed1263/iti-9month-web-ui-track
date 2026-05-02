import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { ApiTask, FilterType, Task } from '../models/app-types';
import { TaskApiFilters, TaskService } from './task';
import { ToastService } from './toast';
import { AuthService } from './auth';

@Injectable({
  providedIn: 'root',
})
export class TaskStateService {
  taskService = inject(TaskService);
  toastService = inject(ToastService);
  authService = inject(AuthService);

  tasks = signal<Task[]>([]);
  selectedTask = signal<Task | null>(null);
  filter = signal<FilterType>('all');
  isLoading = signal(false);

  constructor() {
    effect(() => {
      const user = this.authService.currentUser();
      if (user) {
        this.loadTasks();
      } else {
        this.tasks.set([]);
      }
    });
  }

  visibleTasks = computed(() => {
    const filterValue = this.filter();
    const allTasks = this.tasks();

    if (filterValue === 'completed') {
      return allTasks.filter((task) => task.completed);
    } else if (filterValue === 'pending') {
      return allTasks.filter((task) => !task.completed);
    }

    return allTasks;
  });

  selectTask(task: Task | null) {
    this.selectedTask.set(task);
  }

  updateFilter(filter: FilterType) {
    this.filter.set(filter);

    if (filter === 'completed') {
      this.loadTasks({ completed: true });
      return;
    }

    if (filter === 'pending') {
      this.loadTasks({ completed: false });
      return;
    }

    this.loadTasks();
  }

  private normalizeId(id: ApiTask['id'] | undefined): string {
    if (id === undefined || id === null) {
      return String(Date.now());
    }

    return String(id);
  }

  private taskMapper(task: Partial<ApiTask>): Task {
    return {
      id: this.normalizeId(task.id),
      userId: task.userId ?? this.authService.currentUser()?.id ?? '',
      title: task.title ?? 'Untitled task',
      description: task.description ?? '',
      priority: task.priority ?? 'medium',
      dueDate: task.dueDate ?? new Date().toISOString().split('T')[0],
      category: task.category ?? 'work',
      tags: Array.isArray(task.tags) ? task.tags : [],
      completed: task.completed ?? false,
    };
  }

  loadTasks(apiFilters?: TaskApiFilters) {
    if (this.isLoading()) {
      return;
    }

    const userId = this.authService.currentUser()?.id;
    if (!userId) {
      this.tasks.set([]);
      return;
    }

    const finalFilters: TaskApiFilters = { ...apiFilters, userId };

    this.isLoading.set(true);

    this.taskService.getTasks(finalFilters).subscribe({
      next: (tasks) => {
        this.tasks.set(tasks.map((task) => this.taskMapper(task)));
        this.isLoading.set(false);
      },
      error: (err) => {
        console.error(err);
        this.toastService.show('Failed to load tasks. Is the server running?', 'error');
        this.isLoading.set(false);
      },
    });
  }

  addTask(task: Omit<Task, 'id' | 'userId'>) {
    this.isLoading.set(true);

    const userId = this.authService.currentUser()?.id;
    if (!userId) {
      this.toastService.show('You must be logged in to add tasks.', 'error');
      this.isLoading.set(false);
      return;
    }

    const taskWithUser = { ...task, userId };

    this.taskService.addTask(taskWithUser).subscribe({
      next: (newTask) => {
        const mappedTask = this.taskMapper(newTask);
        this.tasks.update((tasks) => [...tasks, mappedTask]);
        this.toastService.show('Task added successfully!', 'success');
        this.isLoading.set(false);
      },
      error: (err) => {
        this.toastService.show('Failed to save task.', 'error');
        this.isLoading.set(false);
      },
    });
  }

  deleteTask(id: string) {
    this.taskService.deleteTask(id).subscribe({
      next: () => {
        this.tasks.update((tasks) => tasks.filter((task) => task.id !== id));
        this.toastService.show('Task deleted.', 'success');
      },
      error: () => {
        this.toastService.show('Could not delete task.', 'error');
      },
    });
  }

  updateTask(updatedTask: Task) {
    this.taskService.updateTask(updatedTask).subscribe({
      next: (newTask) => {
        const mappedTask = this.taskMapper(newTask);
        this.tasks.update((tasks) =>
          tasks.map((task) => (task.id === mappedTask.id ? mappedTask : task)),
        );
        this.toastService.show('Task updated.', 'success');
      },
      error: () => {
        this.toastService.show('Update failed.', 'error');
      },
    });
  }
}
