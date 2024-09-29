import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonicModule, FormsModule, CommonModule], // Verifique se `FormsModule` está importado!
  standalone: true
})
export class HomePage {
  public valorConta: number | undefined;
  public porcentagemGorjeta: number | undefined;
  public valorGorjeta: number = 0;
  public totalConta: number = 0;

  calcularGorjeta() {
    if (this.valorConta && this.porcentagemGorjeta) {
      this.valorGorjeta = (this.valorConta * this.porcentagemGorjeta) / 100;
      this.totalConta = this.valorConta + this.valorGorjeta;
    }
  }
}