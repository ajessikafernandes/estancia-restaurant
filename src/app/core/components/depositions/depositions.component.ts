import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-depositions',
  templateUrl: './depositions.component.html',
  styleUrls: ['./depositions.component.css']
})
export class DepositionsComponent implements OnInit {

  titleBanner: string;

  depositions1: string;

  author1: string;

  depositions2: string;

  author2: string;

  depositions3: string;

  author3: string;

  constructor() {
    this.titleBanner = 'Depoimento dos nossos Clientes';
    this.depositions1 = 'almoçei com minha namorada exelente atendimento funcionaros otimos buffe maravilhoso ambiente muito bom..adorei';
    this.author1 = 'Daniel P.';
    this.depositions2 = 'Fui com minha família, pedimos rodízio, fomos muito bem atendidos. Churrasco muito gostoso, várias opções. Tem estacionamento também.';;
    this.author2 = 'Ludia';
    this.depositions3 ='Como todo brasileiro sou apaixonado por churrasco e pizza... então nada melhor que aproveitar o rodizio nesse estabelecimento.';
    this.author3 = 'Pedro S.';
  }

  ngOnInit() {
  }

}
