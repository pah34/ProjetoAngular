import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule],
})
export class HomePage {
  public peso: number | undefined;
  public altura: number | undefined;
  public resultado: number | undefined;
  public classificacao: string = "";

  calcularIMC() {
    if (this.peso && this.altura) {
      this.resultado = this.peso / (this.altura * this.altura);
      if (this.resultado < 18.5) {
        this.classificacao = "Abaixo do peso";
      } else if (this.resultado >= 18.5 && this.resultado <= 24.9) {
        this.classificacao = "Peso normal";
      } else if (this.resultado >= 25 && this.resultado <= 29.9) {
        this.classificacao = "Sobrepeso";
      } else {
        this.classificacao = "Obesidade";
      }
    }
  }
}