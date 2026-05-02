import { Component, computed, inject, OnDestroy, OnInit, Signal, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrls: ['./header.css'],
  imports: [RouterLink, RouterLinkActive],
})
export class HeaderComponent implements OnInit, OnDestroy {
  private router = inject(Router);
  authService = inject(AuthService);

  startTime: number = Date.now();
  private intervalId: number | undefined;
  timer = signal<number>(0);
  formattedTimer: Signal<string> = computed(() => {
    const minutes = Math.floor(this.timer() / 60);
    const seconds = this.timer() % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  });

  ngOnInit(): void {
    this.intervalId = window.setInterval(() => {
      this.timer.set(Math.floor((Date.now() - this.startTime) / 1000));
    }, 1000);
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  isTaskFormRoute(): boolean {
    const url = this.router.url;
    return url === '/add-task' || url.startsWith('/edit-task/');
  }

  getTaskTitle(): string {
    const url = this.router.url;

    if (url.startsWith('/edit-task/')) {
      return 'Edit Task';
    }

    return 'Add Task';
  }
}
