import { Component, inject, OnInit } from '@angular/core';
import { TaskStateService } from '../../services/task-state';
import { CardComponent } from '../card/card';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.html',
  styleUrls: ['./task-list.css'],
  imports: [CardComponent],
})
export class TaskListComponent implements OnInit {
  taskState = inject(TaskStateService);

  ngOnInit(): void {
    this.taskState.loadTasks();
  }
}
