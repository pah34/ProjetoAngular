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
  constructor() {}
  public distanciaKm: number | undefined;
  public resultadoMilhas: number | undefined;

  converterDistancia() {
    if (this.distanciaKm !== undefined) {
      this.resultadoMilhas = this.distanciaKm * 0.621371;
    }
  }
}
