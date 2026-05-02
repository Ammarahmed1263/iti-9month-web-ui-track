import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrl: './login.css',
  imports: [FormsModule],
})
export class LoginComponent {
  router = inject(Router);
  authService = inject(AuthService);

  onLogin(form: NgForm) {
    if (form.invalid) {
      form.control.markAllAsTouched();
      return;
    }

    const email = form.value.email;

    if (!email) {
      return;
    }

    this.authService.login(email, form.value.password);
  }
}
