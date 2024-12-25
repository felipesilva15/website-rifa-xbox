import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.scss'
})
export class TimerComponent implements OnInit {
  @Input() limitDate: Date = new Date();
  @Input() timerInterval: number = 1000;
  weeks: number = 0;
  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.initTimer();
  }

  initTimer(): void {
    setInterval(() => {
      const currentDate = new Date();
      const msDifference = this.limitDate.getTime() - currentDate.getTime();

      this.seconds = Math.floor(msDifference / 1000);
      this.minutes = Math.floor(this.seconds / 60);
      this.hours = Math.floor(this.minutes / 60);
      this.days = Math.floor(this.hours / 24);
      this.weeks = Math.floor(this.days / 7);

      this.seconds = this.seconds % 60;
      this.minutes = this.seconds % 60;
      this.hours = this.minutes % 24;
      this.days = this.hours % 7;

    }, this.timerInterval);
  }
}
