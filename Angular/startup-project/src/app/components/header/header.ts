import { ChangeDetectorRef, Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrls: ['./header.css'],
  imports: [RouterLink, RouterLinkActive],
})
export class HeaderComponent implements OnInit, OnDestroy {
  startTime: number = 0;
  timer: number = 0;
  formattedTimer: string = '00:00';
  private intervalId: number | undefined;

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.startTime = Date.now();
    this.formatTimer();

    this.intervalId = window.setInterval(() => {
      this.timer = Math.floor((Date.now() - this.startTime) / 1000);
      this.formatTimer();
      this.cd.detectChanges();
    }, 1000);
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  private formatTimer(): void {
    const minutes = Math.floor(this.timer / 60);
    const seconds = this.timer % 60;
    this.formattedTimer = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  }
}
