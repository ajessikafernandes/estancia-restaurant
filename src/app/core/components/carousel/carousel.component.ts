import { Component, OnInit } from '@angular/core';

import { HostListener } from "@angular/core";

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  depositions1: string;
  depositions2: string;
  depositions3: string;
  depositions4: string;
  depositions5: string;
  depositions6: string;

  author1: string;
  author2: string;
  author3: string;
  author4: string;
  author5: string;
  author6: string;

  screenHeight: number;
  screenWidth: number;

  sizeWindow: number;

  constructor() {
    this.depositions1 = 'Fui com minha família, pedimos rodízio, fomos muito bem atendidos. Churrasco muito gostoso, várias opções. Tem estacionamento também.';
    this.author1 = 'Ludia';
    this.depositions2 = 'almoçei com minha namorada exelente atendimento funcionaros otimos buffe maravilhoso ambiente muito bom..adorei';
    this.author2 = 'Daniel P.';
    this.depositions3 = 'Como todo brasileiro sou apaixonado por churrasco e pizza... então nada melhor que aproveitar o rodizio nesse estabelecimento.';
    this.author3 = 'Pedro S.';
    this.depositions4 = 'Lugar agradável, bom para família, atendimento bom, estacionamento no lugar, reposição de comida constantemente.';
    this.author4 = 'Jaqueline Santos';
    this.depositions5 = 'Me sinto bem no local, comida ótima, carnes variadas e muito boas! Ótimo lugar para confraternizar com família e/ou amigos.'
    this.author5 = 'Kaique Silva';
    this.depositions6 = 'Um ambiente muitooo familiar, com certeza voltarei outras vezes.';
    this.author6 = 'Alaide Santos';
    this.getScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth > 800) {
      this.sizeWindow = 3;
    } else {
      this.sizeWindow = 1;
    }
  }

  ngOnInit(): void { };
}
