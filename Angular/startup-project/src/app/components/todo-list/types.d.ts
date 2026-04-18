export type Priority = 'low' | 'medium' | 'high';
export type Category = 'work' | 'personal' | 'study';

export interface Task {
  id: number;
  title: string;
  description: string;
  priority: Priority;
  dueDate: string;
  category: Category;
  tags: string[];
  completed?: boolean;
}

export interface ToastEvent {
  message: string;
  type: ToastType;
}

export type FilterType = 'all' | 'completed' | 'pending';
