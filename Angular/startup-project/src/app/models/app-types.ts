export type Priority = 'low' | 'medium' | 'high';
export type Category = 'work' | 'personal' | 'study';
export type FilterType = 'all' | 'completed' | 'pending';
export type ToastType = 'success' | 'error' | 'info' | 'warning';

export interface Task {
  id: string;
  userId: string;
  title: string;
  description: string;
  priority: Priority;
  dueDate: string;
  category: Category;
  tags: string[];
  completed?: boolean;
}

export interface ApiTask extends Omit<Task, 'id'> {
  id: string | number;
}

export interface ToastEvent {
  message: string;
  type: ToastType;
}

export interface User {
  id: string;
  email: string;
  userName: string;
}

export interface apiUser extends User {
  password: string;
}