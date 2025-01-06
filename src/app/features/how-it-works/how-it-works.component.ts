import { Component, OnInit } from '@angular/core';
import { Raffle } from '../../shared/models/raffle';
import { RaffleService } from '../../shared/services/raffle.service';
import { TimerComponent } from "../../shared/components/timer/timer.component";
import { CurrencyPipe, DatePipe } from '@angular/common';
import { SkeletonModule } from 'primeng/skeleton';

@Component({
  selector: 'app-how-it-works',
  standalone: true,
  imports: [
    TimerComponent,
    SkeletonModule,
    DatePipe,
    CurrencyPipe
  ],
  templateUrl: './how-it-works.component.html',
  styleUrl: './how-it-works.component.scss'
})
export class HowItWorksComponent implements OnInit {
  constructor(private raffleService: RaffleService) { }

  raffle!: Raffle;
  raffleEndDate!: Date;
  isLoading: boolean = true;
  daysOfWeek: string[] = [
    'Domingo',
    'Segunda-feira',
    'Terça-feira',
    'Quarta-feira',
    'Quinta-feira',
    'Sexta-feira',
    'Sábado'
  ]

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.isLoading = true;

    this.raffleService.get().subscribe({
      next: (res: Raffle) => {
        res.end_date = new Date(<Date>res.end_date);

        this.raffleEndDate = res.end_date;
        this.raffle = res;
        this.isLoading = false;
      }
    });
  }

  getDayOfWeek(date: Date): string {
    return this.daysOfWeek[date.getDay()];
  }
}
