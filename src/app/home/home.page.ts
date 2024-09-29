import { Component } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, HttpClientModule],
})
export class HomePage {
  public valorBRL: number | undefined;
  public valorUSD: number | undefined;

  constructor(private http: HttpClient) {}

  converterMoeda() {
    if (this.valorBRL) {
      this.http.get<any>('https://api.exchangerate-api.com/v4/latest/BRL').subscribe(data => {
        const taxa = data.rates.USD;
        this.valorUSD = parseFloat((this.valorBRL! * taxa).toFixed(2));
      });
    }
  }
}