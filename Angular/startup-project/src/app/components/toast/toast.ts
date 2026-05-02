import { Component, input, output } from '@angular/core';
import { ToastType } from '../../models/app-types';

@Component({
  selector: 'app-toast',
  imports: [],
  templateUrl: './toast.html',
  styleUrl: './toast.css',
})
export class ToastComponent {
  show = input(false);
  message = input('Testing message');
  type = input<ToastType>('info');
  closed = output<void>();

  hideToast() {
    this.closed.emit();
  }
}
