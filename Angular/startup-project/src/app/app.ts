import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer';
import { HeaderComponent } from './components/header/header';
import { ToastComponent } from './components/toast/toast';
import { ToastService } from './services/toast';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FooterComponent, ToastComponent, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  toastService = inject(ToastService);

  onToastClosed(): void {
    this.toastService.hide();
  }
}
