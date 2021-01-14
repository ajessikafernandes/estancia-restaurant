import { Component, OnInit } from '@angular/core';

import { HostListener } from "@angular/core";
import { DepositionService } from 'src/app/data/service/deposition.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  providers:[
    DepositionService,
  ]
})
export class CarouselComponent implements OnInit {

  depositionList: any;

  screenWidth: number;

  sizeWindow: number;

  constructor(private depositionService : DepositionService) {
    this.getScreenSize();
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

  ngOnInit() { 
    this.depositionList = this.depositionService.get();
  };
}
