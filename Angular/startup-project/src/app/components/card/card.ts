import { Component, inject, input, output } from '@angular/core';
import { Task } from '../../models/app-types';
import { Router } from '@angular/router';
import { DueStatusPipe } from '../../pipes/due-status-pipe';

@Component({
  selector: 'app-card',
  templateUrl: './card.html',
  styleUrls: ['./card.css'],
  imports: [DueStatusPipe],
})
export class CardComponent {
  router = inject(Router);

  task = input.required<Task>();

  deleteTaskEvent = output<string>();
  editTaskEvent = output<Task>();
  updateTaskEvent = output<Task>();

  deleteTask(taskId: string): void {
    this.deleteTaskEvent.emit(taskId);
  }

  updateTask(task: Task): void {
    this.editTaskEvent.emit(task);
    this.router.navigate(['/edit-task', task.id]);
  }

  toggleCompleted(): void {
    this.updateTaskEvent.emit({
      ...this.task(),
      completed: !this.task().completed,
    });
  }
}
