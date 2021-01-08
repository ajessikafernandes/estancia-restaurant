import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-depositions',
  templateUrl: './depositions.component.html',
  styleUrls: ['./depositions.component.css']
})
export class DepositionsComponent implements OnInit {

  titleBanner: 'Depoimento dos nossos Clientes';

  depositions1: 'almoçei com minha namorada exelente atendimento funcionaros otimos buffe maravilhoso ambiente muito bom..adorei';

  author1: 'Daniel P.';

  depositions2: 'Fui com minha família, pedimos rodízio, fomos muito bem atendidos. Churrasco muito gostoso, várias opções. Tem estacionamento também.';

  author2: 'Ludia';

  depositions3: 'Como todo brasileiro sou apaixonado por churrasco e pizza... então nada melhor que aproveitar o rodizio nesse estabelecimento.';

  author3: 'Pedro S.';

  constructor() {}

  ngOnInit() {
  }

}
