import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule],
})
export class HomePage {
  constructor() {}
  public capital: number | undefined;
  public taxaJuros: number | undefined;
  public tempo: number | undefined;
  public montante: number | undefined;

  calcularMontante() {
    if (this.capital && this.taxaJuros && this.tempo) {
      this.montante = this.capital * (1 + (this.taxaJuros / 100) * this.tempo);
    }
  }
}