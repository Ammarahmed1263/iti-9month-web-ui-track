import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
export class InputsComponent implements OnChanges {
  @Input() editingTask: Task | null = null;

  @Output() showToast = new EventEmitter<ToastEvent>();
  @Output() addTaskEvent = new EventEmitter<Task>();

  task: TaskForm = this.createEmptyForm();

  ngOnChanges(changes: SimpleChanges): void {
    const editingTaskChange = changes['editingTask'];
    if (!editingTaskChange) {
      return;
    }

    const value = editingTaskChange.currentValue as Task | null;
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
