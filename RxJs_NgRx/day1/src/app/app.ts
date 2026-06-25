import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { combineLatest, concat, forkJoin, merge, Observable, of } from 'rxjs';

interface DashboardData {
  flight: {
    flightNo: string;
    status: string;
    estimatedArrival: string;
  };
  weather: {
    temperature: number;
    windspeed: number;
    weathercode?: number;
  };
  gate: {
    gate: string;
    terminal: string;
    status: string;
  };
}

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  private http = inject(HttpClient);
  currentTask: number = 1;

  products$!: Observable<any>;
  products = signal<any[]>([]);
  isLoading = signal(true);

  dashboardData = signal<DashboardData | null>(null);
  isDashboardLoading = signal(false);
  dashboardError = signal(false);

  sensorData = signal<any>(null);
  isSensorActive = signal(true);

  activityFeed = signal<string[]>([]);
  isLoggedIn = signal(false);

  private activitySubscribers: any[] = [];
  private activity$ = new Observable<string>((subscriber) => {
    this.activitySubscribers.push(subscriber);

    return () => {
      this.activitySubscribers = this.activitySubscribers.filter((o) => o !== subscriber);
    };
  });

  ngOnInit(): void {
    this.loadTask1();
  }

  selectTask(taskNumber: number) {
    this.currentTask = taskNumber;
    switch (taskNumber) {
      case 1:
        this.products.set([]);
        this.loadTask1();
        break;
      case 2:
        this.loadTask2();
        break;
      case 3:
        this.loadTask3();
        break;
      case 4:
        this.loadTask4();
        break;
    }
  }

  loadTask1() {
    const warehouse1$ = this.http.get('https://dummyjson.com/products/category/smartphones');
    const warehouse2$ = this.http.get('https://dummyjson.com/products/category/laptops');
    const warehouse3$ = this.http.get('https://dummyjson.com/products/category/vehicle');

    this.products$ = merge(warehouse1$, warehouse2$, warehouse3$);
    this.products$.subscribe({
      next: (response) => {
        this.products.update((prev) => [...prev, ...response.products]);
        this.isLoading.set(false);
      },
      error: (error) => {
        console.error(error);
        this.isLoading.set(false);
      },
    });
  }

  loadTask2() {
    this.isDashboardLoading.set(true);
    this.dashboardError.set(false);

    const flightStatus$ = of({
      flightNo: 'AA-109',
      status: 'On Time',
      estimatedArrival: '10:45 AM',
    });

    const weather$ = this.http.get<{
      current_weather: {
        temperature: number;
        windspeed: number;
        weathercode?: number;
      };
    }>(
      'https://api.open-meteo.com/v1/forecast?latitude=25.2048&longitude=55.2708&current_weather=true',
    );

    const gateInfo$ = of({
      gate: 'A12',
      terminal: 'Terminal 3',
      status: 'Boarding',
    });

    forkJoin([flightStatus$, weather$, gateInfo$]).subscribe({
      next: ([flight, weatherResult, gate]) => {
        this.dashboardData.set({
          flight: flight,
          weather: weatherResult.current_weather,
          gate: gate,
        });
        this.isDashboardLoading.set(false);
      },
      error: (err) => {
        console.error(err);
        this.dashboardError.set(true);
        this.isDashboardLoading.set(false);
      },
    });
  }

  loadTask3() {
    const temp$ = new Observable<number>((subscriber) => {
      let temp = 22;
      const interval = setInterval(() => {
        temp += Math.floor(Math.random() * 3) - 1;
        subscriber.next(temp);
      }, 1200);

      return () => clearInterval(interval);
    });

    const traffic$ = new Observable<number>((subscriber) => {
      let traffic = 45;
      const interval = setInterval(() => {
        traffic += Math.floor(Math.random() * 7) - 3;
        subscriber.next(Math.max(10, Math.min(90, traffic)));
      }, 1800);

      return () => clearInterval(interval);
    });

    const subscription = combineLatest([temp$, traffic$]).subscribe({
      next: ([temperature, traffic]) => {
        this.sensorData.set({ temperature, traffic });
      },
    });

    setTimeout(() => {
      subscription.unsubscribe();
      this.isSensorActive.set(false);
    }, 20000);
  }

  loadTask4() {
    this.activityFeed.set([]);

    this.activity$.subscribe({
      next: (action) => {
        this.activityFeed.update((prev) => [action, ...prev]);
      },
    });
  }

  private emitActivity(action: string) {
    this.activitySubscribers.forEach((subscriber) => subscriber.next(action));
  }

  login() {
    this.isLoggedIn.set(true);
    this.emitActivity('User logged in');
    this.startOnboarding();
  }

  logout() {
    this.isLoggedIn.set(false);
    this.emitActivity('User logged out');
  }

  enroll() {
    this.emitActivity('User enrolled in a course');
  }

  private startOnboarding() {
    const step1$ = new Observable<string>((subscriber) => {
      setTimeout(() => {
        subscriber.next('Onboarding Step 1: Profile Setup Complete');
        subscriber.complete();
      }, 1500);
    });

    const step2$ = new Observable<string>((subscriber) => {
      setTimeout(() => {
        subscriber.next('Onboarding Step 2: Preferences Saved');
        subscriber.complete();
      }, 1500);
    });

    const step3$ = new Observable<string>((subscriber) => {
      setTimeout(() => {
        subscriber.next('Onboarding Step 3: Ready to Learn!');
        subscriber.complete();
      }, 1500);
    });

    concat(step1$, step2$, step3$).subscribe({
      next: (message) => {
        this.emitActivity(message);
      },
    });
  }
}
