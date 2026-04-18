import { Component } from '@angular/core';
import { FooterComponent } from './components/footer/footer';
import { HeaderComponent } from './components/header/header';
import { CarouselComponent } from './components/carousel/carousel';
import { ToastComponent } from './components/toast/toast';
import { ToastType } from './components/toast/types';
import { TodoListComponent } from './components/todo-list/todo-list';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FooterComponent, TodoListComponent, CarouselComponent, ToastComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  private toastTimeoutId: ReturnType<typeof setTimeout> | null = null;

  toastMessage: {
    show: boolean;
    message: string;
    type: ToastType;
  } = {
    show: false,
    message: 'Default message',
    type: 'error',
  };

  showToast(message: string, type: ToastType) {
    this.clearToastTimeout();

    this.toastMessage.message = message;
    this.toastMessage.type = type;
    this.toastMessage.show = true;

    this.toastTimeoutId = setTimeout(() => {
      this.toastMessage.show = false;
      this.toastTimeoutId = null;
    }, 4000);
  }

  onToastClosed() {
    this.clearToastTimeout();
    this.toastMessage.show = false;
  }

  private clearToastTimeout(): void {
    if (this.toastTimeoutId !== null) {
      clearTimeout(this.toastTimeoutId);
      this.toastTimeoutId = null;
    }
  }
}
