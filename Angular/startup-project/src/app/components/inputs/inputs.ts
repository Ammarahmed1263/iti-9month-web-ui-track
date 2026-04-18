import { Component, EventEmitter, Output, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToastType } from '../toast/types';
import { Category, Priority, Task, ToastEvent } from '../todo-list/types';

interface TaskForm {
  title: string;
  description: string;
  priority: Priority;
  dueDate: string;
  category: Category;
  tags: string;
}

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.html',
  styleUrl: './inputs.css',
  imports: [FormsModule],
})
export class InputsComponent {
  private _editingTask: Task | null = null;

  @Input()
  set editingTask(value: Task | null) {
    this._editingTask = value;

    if (value) {
      this.task = {
        title: value.title,
        description: value.description,
        priority: value.priority,
        dueDate: value.dueDate,
        category: value.category,
        tags: value.tags.join(', '),
      };
      return;
    }

    this.resetForm();
  }

  get editingTask(): Task | null {
    return this._editingTask;
  }

  @Output() showToast = new EventEmitter<ToastEvent>();
  @Output() addTaskEvent = new EventEmitter<Task>();

  task: TaskForm = this.createEmptyForm();

  addTask() {
    if (!this.task.title.trim()) {
      this.showToast.emit({ message: 'Task title is required!', type: 'error' });
      return;
    }

    const { title, description, priority, dueDate, category, tags } = this.task;

    this.addTaskEvent.emit({
      id: this.editingTask ? this.editingTask.id : new Date().getTime(),
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
      completed: this.editingTask ? this.editingTask.completed : false,
    });

    this.resetForm();
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
