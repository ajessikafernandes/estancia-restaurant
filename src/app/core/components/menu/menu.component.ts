import { Component, OnInit } from '@angular/core';
import { SteakhouseService } from 'src/app/data/service/steakhouse.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers: [
    SteakhouseService,
  ]
})
export class MenuComponent implements OnInit {

  panelOpenState = false;

  titleCuts1: string;
  titleCuts2: string;
  titleCuts3: string;

  tradicionalCutsList: any;

  novelCutsList: any;

  cuttingFishList: any;

  constructor(private tradicionalService: SteakhouseService) {
    this.titleCuts1 = 'Cortes Tradicionais';
    this.titleCuts2 = 'Cortes Nobres';
    this.titleCuts3 = 'Peixes';
  }

  ngOnInit() {
    this.tradicionalCutsList = this.tradicionalService.getTradicionalCuts();
    this.novelCutsList = this.tradicionalService.getNovelCuts();
    this.cuttingFishList = this.tradicionalService.getFishCuts();
  }

}
