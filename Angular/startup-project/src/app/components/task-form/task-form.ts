import { Component, effect, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category, Priority, Task } from '../../models/app-types';
import { TaskStateService } from '../../services/task-state';

interface TaskForm {
  title: string;
  description: string;
  priority: Priority;
  dueDate: string;
  category: Category;
  tags: string;
}

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.html',
  styleUrl: './task-form.css',
  imports: [FormsModule],
})
export class TaskFormComponent {
  taskState = inject(TaskStateService);
  route = inject(ActivatedRoute);
  router = inject(Router);

  task: TaskForm = this.createEmptyForm();

  constructor() {
    this.route.paramMap.subscribe((params) => {
      const taskId = params.get('id');

      if (taskId === null) {
        if (this.taskState.selectedTask() !== null) {
          this.taskState.selectTask(null);
        }
        return;
      }

      if (this.taskState.tasks().length === 0) {
        this.taskState.loadTasks();
        return;
      }

      const task = this.taskState.tasks().find((item) => item.id === taskId) ?? null;
      if (this.taskState.selectedTask()?.id !== task?.id) {
        this.taskState.selectTask(task);
      }
    });

    effect(() => {
      const task = this.taskState.selectedTask();
      if (task) {
        this.task = {
          title: task.title,
          description: task.description,
          priority: task.priority,
          dueDate: task.dueDate,
          category: task.category,
          tags: task.tags.join(', '),
        };
        return;
      } else {
        this.resetForm();
      }
    });
  }

  addTask() {
    if (!this.task.title.trim()) {
      console.error('Task title is required!');
      return;
    }

    const { title, description, priority, dueDate, category, tags } = this.task;
    const taskData = {
      title,
      description,
      priority,
      dueDate,
      category,
      tags: tags
        ? tags
            .split(',')
            .map((t) => t.trim())
            .filter(Boolean)
        : [],
    };

    if (this.taskState.selectedTask()) {
      const updatedTask: Task = {
        id: this.taskState.selectedTask()!.id,
        userId: this.taskState.selectedTask()!.userId,
        ...taskData,
        completed: this.taskState.selectedTask()!.completed,
      };
      this.taskState.updateTask(updatedTask);
    } else {
      this.taskState.addTask({
        ...taskData,
        completed: false,
      });
    }

    this.resetForm();
    this.taskState.selectTask(null);
    this.router.navigate(['/my-tasks']);
  }

  private createEmptyForm(): TaskForm {
    return {
      title: '',
      description: '',
      priority: 'medium',
      dueDate: new Date().toISOString().split('T')[0],
      category: 'work',
      tags: '',
    };
  }

  private resetForm(): void {
    this.task = this.createEmptyForm();
  }
}
