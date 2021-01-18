import { Injectable } from '@angular/core';
import { Pizza } from '../model/pizza';

@Injectable({
  providedIn: 'root'
})
export class PizzeriaService {

  traditionalPizzasList: Array<Pizza> = ([
    { pizzaId: 1, titlePizza: 'Mussarela', ingredients: 'A incomparável mussarela, servida sobre molho de tomate especial.' },
    { pizzaId: 2, titlePizza: 'Calabresa', ingredients: 'Deliciosas fatias de calabresa, acompanhadas de cebola, azeitonas verdes e mussarela especial.' },
    { pizzaId: 3, titlePizza: 'Portuguesa', ingredients: 'Presunto especial acompanhado de cebola e azeitonas verdes, coberto pela exclusiva mussarela.' },
    { pizzaId: 4, titlePizza: 'Marguerita', ingredients: 'Mussarela, manjericão, tomates selecionados e queijo parmesão.' },
    { pizzaId: 5, titlePizza: 'Vegetariana', ingredients: 'Saborosa combinção de mussarela, tomates selecionados, champignon, pimentão, cebola e azeitonas verdes..' },
    { pizzaId: 6, titlePizza: 'Corn & Bacon', ingredients: 'Mussarela, fatias do melhor bacon e milho selecionado.' },
    { pizzaId: 7, titlePizza: 'Pepperoni', ingredients: 'Deliciosas fatias de pepperoni (salame especial condimentado com páprica) e mussarela.' },
  ])

  sweetPizzasList: Array<Pizza> = ([
    { pizzaId: 1, titlePizza: 'Prestígio', ingredients: 'Camadas de chocolate, fios de coco umedecidos e lascas de castanha-do-pará.' },
    { pizzaId: 2, titlePizza: 'Bananas ao Rum', ingredients: 'Bananas flambadas, rum, açúcar e canela servidas com sorvete de creme.' },
    { pizzaId: 3, titlePizza: 'Chocolate ao leite', ingredients: 'Camadas de chocolate com morangos' },
   ])

  constructor() { }
  
  getTradiconalPizzas(){
    return this.traditionalPizzasList;
  }

  getSweetPizzas(){
    return this.sweetPizzasList;
  }

}
