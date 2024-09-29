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
  public celsius: number | undefined;
  public fahrenheit: number | undefined;

  converterTemperatura() {
    if (this.celsius !== undefined) {
      this.fahrenheit = (this.celsius * 9/5) + 32;
    }
  }
}
