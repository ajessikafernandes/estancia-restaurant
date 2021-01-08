import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {

  tituloBanner: 'Um dos restaurantes mais tradicionais da Região';
  subTituloBanner: 'Seja no almoço, jantar, happy hour ou eventos, estamos esperando por você!';

  constructor(){}

  ngOnInit(): void {
  }

}
