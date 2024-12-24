import { RaffleService } from './../../shared/services/raffle.service';
import { RaffleCardNumber } from '../../shared/models/raffle-card-number';
import { Component, OnInit } from '@angular/core';
import { PadNumberPipe } from '../../shared/pipes/pad-number.pipe';
import { SkeletonModule } from 'primeng/skeleton';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [PadNumberPipe, SkeletonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent implements OnInit {
  constructor(private raffleService: RaffleService) { }

  cardNumbers: RaffleCardNumber[] = [];
  isLoading: boolean = true;

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.isLoading = true;

    this.raffleService.card().subscribe({
      next: (res: RaffleCardNumber[]) => {
        this.cardNumbers = res;
        this.isLoading = false;
      },
      error: (err: any) => {
        console.error(err);
        this.isLoading = false;
      }
    });
  }
}
