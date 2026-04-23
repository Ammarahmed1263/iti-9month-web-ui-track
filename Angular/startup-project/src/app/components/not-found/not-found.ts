import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  imports: [],
  templateUrl: './not-found.html',
  styleUrl: './not-found.css',
})
export class NotFoundComponent implements OnInit, OnDestroy {
  private readonly router = inject(Router);
  private redirectTimeoutId?: number;

  ngOnInit(): void {
    this.redirectTimeoutId = window.setTimeout(() => {
      this.router.navigateByUrl('/login');
    }, 4000);
  }

  ngOnDestroy(): void {
    if (this.redirectTimeoutId) {
      window.clearTimeout(this.redirectTimeoutId);
    }
  }
}
