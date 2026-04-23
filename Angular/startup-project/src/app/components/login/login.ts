import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrl: './login.css',
  imports: [FormsModule],
})
export class LoginComponent {
  constructor(private readonly router: Router) {}

  onLogin(form: NgForm) {
    if (form.invalid) {
      form.control.markAllAsTouched();
      return;
    }

    const email = form.value.email;

    if (!email) {
      return;
    }

    localStorage.setItem('user', JSON.stringify(email));
    this.router.navigate(['/home']);
  }
}
