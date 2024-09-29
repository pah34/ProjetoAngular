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
  public numero1: number | undefined;
  public numero2: number | undefined;
  public resultado: number | undefined;

  calcular(operacao: string) {
    if (this.numero1 !== undefined && this.numero2 !== undefined) {
      switch (operacao) {
        case 'somar':
          this.resultado = this.numero1 + this.numero2;
          break;
        case 'subtrair':
          this.resultado = this.numero1 - this.numero2;
          break;
        case 'multiplicar':
          this.resultado = this.numero1 * this.numero2;
          break;
        case 'dividir':
          this.resultado = this.numero1 / this.numero2;
          break;
      }
    }
  }
}
