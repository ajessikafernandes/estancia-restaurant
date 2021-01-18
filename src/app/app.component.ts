import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nomeLogo: string;
  opened: boolean;
  over: string;

  constructor() {
    this.nomeLogo = 'Estância';
    this.opened = false;
    this.over = 'side';
  }
}
