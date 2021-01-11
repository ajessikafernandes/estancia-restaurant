import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  nomeLogo: string;
  opened: boolean;
  over: string;

  constructor() {
    this.nomeLogo = 'Estância';
    this.opened = false;
    this.over = 'side';
  }

  ngOnInit(): void {
  }

}
