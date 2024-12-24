import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';
import { Raffle } from '../models/raffle';
import { RaffleCardNumber } from '../models/raffle-card-number';

@Injectable({
  providedIn: 'root'
})
export class RaffleService {
  private readonly baseUrl = environment.baseUrlApi + '/raffle';
  private readonly raffle_id = environment.raffle_id;

  constructor(private http: HttpClient) { }

  get(): Observable<Raffle> {
    return this.http.get<Raffle>(`${this.baseUrl}/${this.raffle_id}`);
  }

  card(): Observable<RaffleCardNumber[]> {
    return this.http.get<RaffleCardNumber[]>(`${this.baseUrl}/${this.raffle_id}/card`);
  }
}
