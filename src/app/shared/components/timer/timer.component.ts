import { Component, Input, OnInit } from '@angular/core';
import { PadNumberPipe } from '../../pipes/pad-number.pipe';
import { SkeletonModule } from 'primeng/skeleton';

@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [
    PadNumberPipe,
    SkeletonModule
  ],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.scss'
})
export class TimerComponent implements OnInit {
  @Input() limitDate!: Date;
  @Input() timerInterval: number = 1000;
  weeks: number = 0;
  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  isLoading: boolean = true;

  constructor() { }

  ngOnInit(): void {
    this.initTimer();
  }

  initTimer(): void {
    setInterval(() => {
      if (!this.limitDate) {
        return;
      }

      const currentDate = new Date();
      const msDifference = this.limitDate.getTime() - currentDate.getTime();

      this.seconds = msDifference / 1000;
      this.minutes = msDifference / 60000;
      this.hours = msDifference / 360000;
      this.days = msDifference / 86400000;
      this.weeks = msDifference / 604800000;

      this.seconds = Math.floor(this.seconds % 60);
      this.minutes = Math.floor(this.minutes % 60);
      this.hours = Math.floor(this.hours % 24);
      this.days = Math.floor(this.days % 7);
      this.weeks = Math.floor(this.weeks);

      this.isLoading = false;
    }, this.timerInterval);
  }
}
