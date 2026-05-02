import { Injectable, signal } from '@angular/core';
import { ToastType } from '../models/app-types';

interface ToastState {
  show: boolean;
  message: string;
  type: ToastType;
}

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private hideTimeoutId: ReturnType<typeof setTimeout> | null = null;

  toastMessage = signal<ToastState>({
    show: false,
    message: '',
    type: 'info',
  });

  show(message: string, type: ToastType, duration = 4000): void {
    this.clearTimeout();

    this.toastMessage.set({
      show: true,
      message,
      type,
    });

    this.hideTimeoutId = setTimeout(() => {
      this.hide();
    }, duration);
  }

  hide(): void {
    this.clearTimeout();
    this.toastMessage.update((toast) => ({
      ...toast,
      show: false,
    }));
  }

  private clearTimeout(): void {
    if (this.hideTimeoutId !== null) {
      clearTimeout(this.hideTimeoutId);
      this.hideTimeoutId = null;
    }
  }
}
