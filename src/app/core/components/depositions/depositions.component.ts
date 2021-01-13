import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-depositions',
  templateUrl: './depositions.component.html',
  styleUrls: ['./depositions.component.css']
})
export class DepositionsComponent implements OnInit {

  titleBanner: string;

  constructor() {
    this.titleBanner = 'Avaliações dos nossos Clientes';
  }

  ngOnInit() {
  }

}
