import { Injectable } from '@angular/core';
import { CuttingFish } from '../model/cutting-fish';
import { NovelCuts } from '../model/novel-cuts';
import { TraditionalCuts } from '../model/TraditionalCuts';

@Injectable({
  providedIn: 'root'
})
export class SteakhouseService {

  traditionalCutsList: Array<TraditionalCuts> = ([
    { traditionalCutsId: 1, linkImage: '', meatType: 'Picanha', kilo: '280 gramas' },
    { traditionalCutsId: 2, linkImage: '', meatType: 'Fraldinha', kilo: '280 gramas' },
    { traditionalCutsId: 3, linkImage: '', meatType: 'Maminha', kilo: '280 gramas' },
    { traditionalCutsId: 4, linkImage: '', meatType: 'Alcatra', kilo: '280 gramas' },
    { traditionalCutsId: 5, linkImage: '', meatType: 'Patinho', kilo: '280 gramas' },
  ])

  novelCutsList: Array<NovelCuts> = ([
    { NovelCutsId: 1, linkImage: '', meatType: 'Assado de tira', kilo: '280 gramas' },
    { NovelCutsId: 2, linkImage: '', meatType: 'Ancho', kilo: '280 gramas' },
    { NovelCutsId: 3, linkImage: '', meatType: 'Chorizo', kilo: '280 gramas' },
    { NovelCutsId: 4, linkImage: '', meatType: 'Raquete', kilo: '280 gramas' },
    { NovelCutsId: 5, linkImage: '', meatType: 'Baby Beef', kilo: '280 gramas' },
  ])

  cuttingFishList: Array<CuttingFish> = ([
    { fishCutsId: 1, linkImage: '', meatType: 'Salmão', kilo: '280 gramas' },
    { fishCutsId: 1, linkImage: '', meatType: 'Anchova Negra', kilo: '280 gramas' },
    { fishCutsId: 1, linkImage: '', meatType: 'Pescada Amarela', kilo: '280 gramas' },
  ])

  constructor() { }

  getTradicionalCuts() {
    return this.traditionalCutsList;
  }

  getNovelCuts() {
    return this.novelCutsList;
  }

  getFishCuts() {
    return this.cuttingFishList;
  }
}
