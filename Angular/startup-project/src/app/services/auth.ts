import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { apiUser } from '../models/app-types';
import { ToastService } from './toast';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);
  private router = inject(Router);
  private toast = inject(ToastService);

  private apiUrl = 'http://localhost:3000/users';

  public currentUser = signal<apiUser | null>(this.getUserFromStorage());
  isLoggedIn = computed(() => this.currentUser() !== null);

  login(email: string, password: string) {
    this.http
      .get<
        apiUser[]
      >(`${this.apiUrl}?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`)
      .subscribe({
        next: (users) => {
          if (users.length > 0) {
            this.setSession(users[0]);
            this.router.navigate(['/home']);
          } else {
            console.error('Invalid credentials');
            this.toast.show('Invalid email or password', 'error');
          }
        },
        error: (err) => console.error('Login request failed', err),
      });
  }

  register(newUser: Omit<apiUser, 'id'>) {
    this.http.post<apiUser>(this.apiUrl, newUser).subscribe({
      next: (user) => {
        this.setSession(user);
        this.router.navigate(['/home']);
      },
      error: (err) => {
        console.error('Registration failed', err);
        this.toast.show('Registration failed', 'error');
      },
    });
  }

  logout() {
    localStorage.removeItem('user');
    this.currentUser.set(null);
    this.router.navigate(['/login']);
  }

  private setSession(user: apiUser): void {
    localStorage.setItem('user', JSON.stringify(user));
    this.currentUser.set(user);
  }

  private getUserFromStorage(): apiUser | null {
    const userStr = localStorage.getItem('user');
    return userStr ? JSON.parse(userStr) : null;
  }
}
