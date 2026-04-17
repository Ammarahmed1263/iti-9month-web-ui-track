import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

type Priority = 'low' | 'medium' | 'high';
type Category = 'work' | 'personal' | 'study';

interface TaskForm {
  title: string;
  description: string;
  priority: Priority;
  dueDate: string;
  category: Category;
  tags: string;
}

interface Task {
  id: number;
  title: string;
  description: string;
  priority: Priority;
  dueDate: string;
  category: Category;
  tags: string[];
}

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.html',
  styleUrl: './inputs.css',
  imports: [FormsModule],
})
export class InputsComponent {
  task: TaskForm = {
    title: '',
    description: '',
    priority: 'low',
    dueDate: new Date().toISOString().split('T')[0],
    category: 'work',
    tags: '',
  };

  tasks: Task[] = [];

  addTask() {
    if (!this.task.title.trim()) return;

    const { title, description, priority, dueDate, category, tags } = this.task;

    this.tasks.push({
      id: new Date().getTime(),
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
    });

    console.log('tasks here: ', this.tasks);

    this.task = {
      title: '',
      description: '',
      priority: 'low',
      dueDate: new Date().toISOString().split('T')[0],
      category: 'work',
      tags: '',
    };
  }
}
