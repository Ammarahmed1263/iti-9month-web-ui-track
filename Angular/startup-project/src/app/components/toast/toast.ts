import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ToastType } from './types';

@Component({
  selector: 'app-toast',
  imports: [],
  templateUrl: './toast.html',
  styleUrl: './toast.css',
})
export class ToastComponent {
  @Input() show = true;
  @Input() message = 'Testing message';
  @Input() type: ToastType = 'info';
  @Output() closed = new EventEmitter<void>();

  hideToast() {
    this.show = false;
    this.closed.emit();
  }
}
