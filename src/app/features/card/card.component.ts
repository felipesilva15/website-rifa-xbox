import { RaffleService } from './../../shared/services/raffle.service';
import { RaffleCardNumber } from '../../shared/models/raffle-card-number';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
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
