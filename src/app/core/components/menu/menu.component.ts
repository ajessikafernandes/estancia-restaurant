import { Component, OnInit } from '@angular/core';
import { SteakhouseService } from 'src/app/data/service/steakhouse.service';
import { PizzeriaService } from 'src/app/data/service/pizzeria.service';

import { HostListener } from "@angular/core";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers: [
    SteakhouseService,
    PizzeriaService,
  ]
})
export class MenuComponent implements OnInit {

  screenWidth: number;

  sizeWindow: number;

  panelOpenState = false;

  pageTitle: string;

  titleSteak: string;

  descriptionSteak: string;

  titleCuts1: string;

  titleCuts2: string;

  tradicionalCutsList: any;

  garnishList: any;

  titleBannerPizza: string;

  titlePizza1: string;

  descriptionBannerPizza: string;

  titlePizza2: string;

  tradicionalPizzasList: any;

  sweetPizzasList: any;

  descriptionDelivery: any;

  constructor(private steakhouseService: SteakhouseService, private pizzeriaService: PizzeriaService) {

    this.pageTitle = 'CARDÁPIO';

    this.titleSteak = 'Steak';

    this.descriptionSteak = 'Carnes assadas em grelha australiana, sempre no seu ponto preferido. Cada corte passa pelo nosso mix de 17 temperos secretos antes de ser preparado com técnicas especiais, na chapa ou em chama aberta. Todos os nossos steaks são servidos com um acompanhamento à sua escolha. Se quiser, você também pode acrescentar ao seu pedido uma das nossas entradas (salada ou sopa do dia) com 50% de desconto: R$ 12,45. A gramatura dos produtos equivale ao peso in natura.';

    this.titleCuts1 = 'Cortes Tradicionais';

    this.titleCuts2 = 'Acompanhamentos';

    this.titleBannerPizza = 'Pizzas';

    this.titlePizza1 = 'Pizzas Salgadas';

    this.titlePizza2 = 'Pizzas Doces';

    this.descriptionBannerPizza = 'Mesmo prezando pela tradição, o restaurante apresenta opções criativas em seu cardápio. Nele o cliente pode optar por sabores tradicionais, especiais e doces';

    this.descriptionDelivery = 'Peça delivery e receba em casa de forma rápida. Faça seu pedido online e retire no restaurante. Veja todos os produtos do cardápio. Pague pelo app e evite filas.';
  }

  ngOnInit() {

    this.tradicionalCutsList = this.steakhouseService.getTradicionalCuts();

    this.garnishList = this.steakhouseService.getGarnish();

    this.tradicionalPizzasList = this.pizzeriaService.getTradiconalPizzas();

    this.sweetPizzasList = this.pizzeriaService.getSweetPizzas();

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

}
