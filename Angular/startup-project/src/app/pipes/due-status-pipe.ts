import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dueStatus',
  standalone: true,
})
export class DueStatusPipe implements PipeTransform {
  transform(dueDate: string | null | undefined): string {
    if (!dueDate) {
      return 'No due date';
    }

    const parsedDate = new Date(dueDate);
    if (Number.isNaN(parsedDate.getTime())) {
      return 'Invalid date';
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const targetDate = new Date(parsedDate);
    targetDate.setHours(0, 0, 0, 0);

    if (targetDate.getTime() < today.getTime()) {
      return 'Overdue';
    }

    if (targetDate.getTime() === today.getTime()) {
      return 'Today';
    }

    return 'Upcoming';
  }
}