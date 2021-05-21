import { Injectable } from '@angular/core';
import { CuttingFish } from '../model/cutting-fish';
import { Garnish } from '../model/garnish';
import { TraditionalCuts } from '../model/TraditionalCuts';

@Injectable({
  providedIn: 'root'
})

export class SteakhouseService {

  traditionalCutsList: Array<TraditionalCuts> = ([
    { traditionalCutsId: 1, meatType: 'FILET MIGNON', description: 'Coberto com molho de mostarda dijon, acompanha batata gratin (aprox 200grs) e farofa crocante.', value: '98' },
    { traditionalCutsId: 2, meatType: 'ENTRECÔTE PREMIUM BLACK ANGUS', description: 'Coberto de Molho de Queijo Roquefort acompanha Espinafre cremoso (200grs aprox) e Farofa crocante.', value: '108' },
    { traditionalCutsId: 3, meatType: 'FRALDINHA', description: 'Coberto com molho marchand du vin (base de molho roti + vinho tinto), acompanha batata gratin (200grs) e farofa crocante', value: '89' },
    { traditionalCutsId: 4, meatType: 'FILET MIGNON DE CORDEIRO', description: 'Coberto com molho marchand du vin (molho à base de roti e vinho tinto), acompanha abóboras e cebolas assadas e farofa crocante', value: '98' },
    { traditionalCutsId: 5, meatType: 'BISTECA DE PORCO', description: 'Coberto com molho de mostarda dijon, acompanha Espinafre Cremoso (200 grs aprox) e farofa crocante', value: '69' },
    { traditionalCutsId: 5, meatType: 'SALMÃO GRELHADO', description: 'Coberto com Molho de Ervas, acompanha Legumes no Azeite e Farofa Crocante', value: '89' },
    { traditionalCutsId: 5, meatType: 'ESCALOPE DE FRANGO KORIN', description: 'Coberto com molho de queijo roquefort, acompanha arroz com nozes e farofa crocante', value: '65' },
  ]);

  garnishList: Array<Garnish> = ([
    { GarnishId: 1, name: 'BATATAS FRITAS 180g', value: '18' },
    { GarnishId: 2, name: 'BATATAS FRITAS 360g', value: '28' },
    { GarnishId: 3, name: 'RODÍZIO DE GUARNIÇÕES', value: '52' },
    { GarnishId: 4, name: 'SALADA VERDE COM NOZES E ERVAS FRESCAS', value: '29' },
  ]);

  constructor() { }

  getTradicionalCuts() {
    return this.traditionalCutsList;
  }

  getGarnish() {
    return this.garnishList;
  }

}
