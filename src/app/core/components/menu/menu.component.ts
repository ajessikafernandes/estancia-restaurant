import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  nomeLogo: 'Estância';
  opened = false;
  over = 'side';

  constructor() {}

  ngOnInit(): void {
  }

}
