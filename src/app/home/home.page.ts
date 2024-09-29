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
  notaA: number | null = null;
  notaB: number | null = null;
  media: number | null = null;
  situacao: string = '';

  calcularMedia() {
    if (this.notaA !== null && this.notaB !== null) {
      // Calcula a média das notas
      this.media = (this.notaA + this.notaB) / 2;

      // Define a situação com base na média
      if (this.media >= 7) {
        this.situacao = 'Aprovado';
      } else if (this.media >= 5) {
        this.situacao = 'Recuperação';
      } else {
        this.situacao = 'Reprovado';
      }
    } else {
      // Caso as notas não estejam preenchidas
      this.situacao = 'Insira as notas A e B';
      this.media = null;
    }
  }
}