import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AlertController, IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule],
})
export class HomePage {
  public peso: number | undefined;
  public altura: number | undefined;
  public resultado: number | undefined;
  public result: number | undefined;
  public classificacao: string = "";

  constructor(private alertController: AlertController) {}
  calcularIMC() {
    if (this.peso && this.altura) {
      this.resultado = this.peso / (this.altura * this.altura);
      this.result = parseFloat((this.resultado!).toFixed(2));
      if (this.resultado < 18.5) {
        this.classificacao = "Abaixo do peso";
      this.exibirAlerta();

      } else if (this.resultado >= 18.5 && this.resultado <= 24.9) {
        this.classificacao = "Peso normal";
      this.exibirAlerta();

      } else if (this.resultado >= 25 && this.resultado <= 29.9) {
        this.classificacao = "Sobrepeso";
      this.exibirAlerta();

      } else {
        this.classificacao = "Obesidade";
      this.exibirAlerta();

      }

    }else {
      this.exibirAlerta();
    }
  }
  async exibirAlerta(){
    const alert = await this.alertController.create({
      header: 'Atenção',
      message: `resultado ${this.result} e você está ${this.classificacao}`,
      buttons: ['OK']
    });

    await alert.present();
  }
}