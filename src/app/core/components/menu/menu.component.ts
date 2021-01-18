import { Component, OnInit } from '@angular/core';
import { SteakhouseService } from 'src/app/data/service/steakhouse.service';
import { PizzeriaService } from 'src/app/data/service/pizzeria.service';

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

  panelOpenState = false;

  pageTitle: string;

  titleSteak: string;

  descriptionSteak: string;

  titleCuts1: string;

  titleCuts2: string;

  titleCuts3: string;

  tradicionalCutsList: any;

  novelCutsList: any;

  cuttingFishList: any;

  titleBannerPizza: string;

  titlePizza1: string;

  descriptionBannerPizza: string;

  titlePizza2: string;

  tradicionalPizzasList: any;

  sweetPizzasList: any;

  constructor(private steakhouseService: SteakhouseService, private pizzeriaService: PizzeriaService) {

    this.pageTitle = 'CARDÁPIO';

    this.titleSteak = 'Steak';

    this.descriptionSteak = 'Carnes assadas em grelha australiana, sempre no seu ponto preferido. Cada corte passa pelo nosso mix de 17 temperos secretos antes de ser preparado com técnicas especiais, na chapa ou em chama aberta. Todos os nossos steaks são servidos com um acompanhamento à sua escolha. Se quiser, você também pode acrescentar ao seu pedido uma das nossas entradas (salada ou sopa do dia) com 50% de desconto: R$ 12,45. A gramatura dos produtos equivale ao peso in natura.';

    this.titleCuts1 = 'Cortes Tradicionais';

    this.titleCuts2 = 'Cortes Nobres';

    this.titleCuts3 = 'Peixes';

    this.titleBannerPizza = 'Pizzas';

    this.titlePizza1 = 'Pizzas Salgadas';

    this.titlePizza2 = 'Pizzas Doces'

    this.descriptionBannerPizza = 'Mesmo prezando pela tradição, o restaurante apresenta opções criativas em seu cardápio. Nele o cliente pode optar por sabores tradicionais, especiais e doces';

  }

  ngOnInit() {

    this.tradicionalCutsList = this.steakhouseService.getTradicionalCuts();

    this.novelCutsList = this.steakhouseService.getNovelCuts();

    this.cuttingFishList = this.steakhouseService.getFishCuts();

    this.tradicionalPizzasList = this.pizzeriaService.getTradiconalPizzas();

    this.sweetPizzasList = this.pizzeriaService.getSweetPizzas();

  }

}
