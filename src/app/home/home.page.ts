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
  public texto: string = '';
  public contagem: number = 0;

  contarPalavras() {
    this.contagem = this.texto ? this.texto.trim().split(/\s+/).length : 0;
  }
}
