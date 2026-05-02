import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ApiTask, Task } from '../models/app-types';

export interface TaskApiFilters {
  completed?: boolean;
  category?: string;
  priority?: string;
  search?: string;
  userId?: string;
}

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3000/tasks';

  getTasks(filters?: TaskApiFilters) {
    let params = new HttpParams();

    if (filters?.completed !== undefined) {
      params = params.set('completed', String(filters.completed));
    }

    if (filters?.category) {
      params = params.set('category', filters.category);
    }

    if (filters?.priority) {
      params = params.set('priority', filters.priority);
    }

    if (filters?.search) {
      params = params.set('q', filters.search);
    }

    if (filters?.userId) {
      params = params.set('userId', filters.userId);
    }

    return this.http.get<ApiTask[]>(this.apiUrl, { params });
  }

  addTask(task: Omit<Task, 'id'>) {
    return this.http.post<ApiTask>(this.apiUrl, task);
  }

  deleteTask(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  updateTask(updatedTask: Task) {
    return this.http.put<ApiTask>(`${this.apiUrl}/${updatedTask.id}`, updatedTask);
  }
}
