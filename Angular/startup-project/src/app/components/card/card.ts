import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../todo-list/types';

@Component({
  selector: 'app-card',
  templateUrl: './card.html',
  styleUrls: ['./card.css'],
  imports: [],
})
export class CardComponent {
  @Input() task!: Task;
  @Output() deleteTaskEvent = new EventEmitter<number>();
  @Output() editTaskEvent = new EventEmitter<Task>();
  @Output() updateTaskEvent = new EventEmitter<Task>();

  deleteTask(taskId: number): void {
    this.deleteTaskEvent.emit(taskId);
  }

  updateTask(task: Task): void {
    this.editTaskEvent.emit(task);
  }

  toggleCompleted(): void {
    this.updateTaskEvent.emit({
      ...this.task,
      completed: !this.task.completed,
    });
  }
}
