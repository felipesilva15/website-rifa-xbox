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
    const formattedNumbers: string = this.selectedNumbers.toString().replaceAll(',', ' | ');

    const message: string =
    `Parabéns por participar do nosso super sorteio!\n\n` +
    `Já estou reservando os seus números da sorte:\n` +
    `${formattedNumbers}\n\n` +
    `Agora é só fazer o PIX para:\n` +
    `*${this.contactNumber}* - Felipe da Silva Santos\n\n` +
    `E não se esqueça! Me envie rapidinho o *comprovante* e seu *Nome Completo* para garantir sua participação.\n\n` +
    `Boa sorte!`;

    const encodedMessage: string = encodeURIComponent(message);

    const url: string = `https://wa.me/55${this.contactNumber}?text=${encodedMessage}`;

    window.open(url, "_blank");
    this.selectedNumbers = [];
  }
}
