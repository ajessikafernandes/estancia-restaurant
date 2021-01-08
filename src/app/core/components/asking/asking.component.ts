import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asking',
  templateUrl: './asking.component.html',
  styleUrls: ['./asking.component.css']
})
export class AskingComponent implements OnInit {

  tituloBanner: 'Perguntas Frequentes';

  panelOpenState = false;

  constructor() {}

  ngOnInit(): void {
  }

}
