import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  linkImagemSobre: 'banner-meat.jpg';
  nomeMarca: 'Estancia Churrascaria e Pizzaria';
  slogan: 'SABOR QUE VEM DOS DETALHES';
  descricao: 'A Estância Churrascaria e Pizzaria, oferecendo a seus clientes uma harmonia de aromas e sabores especiais. Uma variedade enorme de pratos: carnes, frango, pizzas , porções, frutos do mar, e sobremesas, feitos com o máximo controle de qualidade, pensando sempre na satisfação de nossos clientes. Nossa estrutura oferece ambiente climatizado e um salão de eventos capaz de atender cerca de 75 pessoas para buffets, aniversários, casamentos, festas de 15 anos e confraternizações em geral, também possui estacionamento com manobrista.';

  constructor() {}

  ngOnInit(): void {
  }

}