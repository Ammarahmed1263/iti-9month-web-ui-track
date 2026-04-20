import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { Task, ToastEvent } from '../todo-list/types';

@Component({
  selector: 'app-card',
  templateUrl: './card.html',
  styleUrls: ['./card.css'],
  imports: [],
})
export class CardComponent implements OnDestroy {
  @Input() task!: Task;
  @Output() deleteTaskEvent = new EventEmitter<number>();
  @Output() editTaskEvent = new EventEmitter<Task>();
  @Output() updateTaskEvent = new EventEmitter<Task>();
  @Output() showToastEvent =  new EventEmitter<ToastEvent>();
  private shouldNotifyDestroy = false;

  deleteTask(taskId: number): void {
    this.shouldNotifyDestroy = true;
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

  ngOnDestroy(): void {
    if (!this.shouldNotifyDestroy) {
      return;
    }

    this.showToastEvent.emit({ message: `Task "${this.task.title}" deleted`, type: 'info' });
  }
}
