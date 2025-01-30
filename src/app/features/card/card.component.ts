import { CustomDynamicDialogService } from './../../shared/services/custom-dynamic-dialog.service';
import { RaffleService } from './../../shared/services/raffle.service';
import { RaffleCardNumber } from '../../shared/models/raffle-card-number';
import { Component, OnInit } from '@angular/core';
import { PadNumberPipe } from '../../shared/pipes/pad-number.pipe';
import { SkeletonModule } from 'primeng/skeleton';
import { BuyFormComponent } from '../../shared/components/buy-form/buy-form.component';
import { Buyer } from '../../shared/models/buyer';
import { DynamicDialog, DialogService } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [PadNumberPipe, SkeletonModule, DynamicDialog],
  providers: [DialogService, CustomDynamicDialogService],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent implements OnInit {
  constructor(private raffleService: RaffleService, private customDynamicDialogService: CustomDynamicDialogService) { }

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
        this.isLoading = false;
      }
    });
  }

  buyNumbers(numbers: number[]): void {
    this.customDynamicDialogService.openDialog<Buyer>(BuyFormComponent, 'Solicitar números', { name: '', numbers: numbers }, 'sm').then();
  }
}
