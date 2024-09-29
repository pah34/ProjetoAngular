import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonicModule, FormsModule, CommonModule],
  standalone: true
})
export class HomePage {
  public novaTarefa: string = ""; // Inicializar nova tarefa como uma string vazia
  public tarefas: Array<{ nome: string; concluida: boolean }> = []; // Inicializa a lista de tarefas vazia

  adicionarTarefa() {
    if (this.novaTarefa.trim().length > 0) {
      this.tarefas.push({ nome: this.novaTarefa, concluida: false });
      console.log(this.tarefas); // Verificar se a tarefa foi adicionada
      this.novaTarefa = "";
    }
  }

  removerTarefa(tarefa: { nome: string; concluida: boolean }) {
    // Filtrar o array para remover a tarefa correspondente
    this.tarefas = this.tarefas.filter(t => t !== tarefa);
  }
  
}