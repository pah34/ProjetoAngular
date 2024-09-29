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
  public totalPassos: number = 0;

  adicionarPasso() {
    this.totalPassos += 1;
  }

  removerPasso() {
    if (this.totalPassos > 0) {
      this.totalPassos -= 1;
    }
  }
}
