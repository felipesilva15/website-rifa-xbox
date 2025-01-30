import { RaffleService } from './../../shared/services/raffle.service';
import { RaffleCardNumber } from '../../shared/models/raffle-card-number';
import { Component, OnInit } from '@angular/core';
import { PadNumberPipe } from '../../shared/pipes/pad-number.pipe';
import { SkeletonModule } from 'primeng/skeleton';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    PadNumberPipe,
    SkeletonModule,
    ButtonModule
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent implements OnInit {
  constructor(private raffleService: RaffleService) { }

  isLoading: boolean = true;
  cardNumbers: RaffleCardNumber[] = [];
  selectedNumbers: number[] = [];
  contactNumber: string = '11983432682';

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
      error: () => {
        this.isLoading = false;
      }
    });
  }

  toogleNumberSelection(raffleCardNumber: RaffleCardNumber  ): void {
    if (!raffleCardNumber.avaiable) {
      return;
    }

    if (this.selectedNumbers.includes(raffleCardNumber.number)) {
      this.selectedNumbers = this.selectedNumbers.filter(selectedNumber => selectedNumber !== raffleCardNumber.number);
    } else {
      this.selectedNumbers.push(raffleCardNumber.number);
    }
  }

  requestNumbers(): void {
    const url: string = `https://wa.me/55${this.contactNumber}?text=Ol%C3%A1!%20Gostaria%20de%20comprar%20o(s)%20n%C3%BAmero(s)%20${this.selectedNumbers.toString()}%20da%20rifa%20do%20Xbox.`;

    window.open(url, "_blank");
    this.selectedNumbers = [];
  }
}
