import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dadoIzda = "../assets/img/dice1.png"
  dadoDcha = "../assets/img/dice2.png"

  numero1: number | undefined = 1
  numero2: number | undefined = 2

  tirarDados(): void {
    this.numero1 = Math.floor((Math.random()* 6) + 1)
    this.numero2 = Math.floor((Math.random()* 6) + 1)
    this.dadoIzda = `../assets/img/dice${this.numero1}.png`
    this.dadoDcha = `../assets/img/dice${this.numero2}.png`
  }
}
