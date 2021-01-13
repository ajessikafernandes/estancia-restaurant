import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asking',
  templateUrl: './asking.component.html',
  styleUrls: ['./asking.component.css']
})
export class AskingComponent implements OnInit {

  tituloBanner: string;

  panelOpenState: boolean;

  constructor() {
    this.tituloBanner = 'Perguntas Frequentes';
    this.panelOpenState = false;
  }

  ngOnInit(): void {
  }

}
