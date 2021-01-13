import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {

  tituloBanner: string;
  subTituloBanner: string;

  constructor() {
    this.tituloBanner = 'Um dos restaurantes mais tradicionais da Região';
    this.subTituloBanner = 'Seja no almoço, jantar, happy hour ou eventos, estamos esperando por você!';
  }

  ngOnInit(): void {
  }

}
