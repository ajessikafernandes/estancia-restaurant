import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  date: number;

  nomeFantasia: string;

  constructor() {
    this.date = new Date().getFullYear();
    this.nomeFantasia = 'Estância Churrascaria e Pizzaria';
  }

  ngOnInit() {
  }
}
