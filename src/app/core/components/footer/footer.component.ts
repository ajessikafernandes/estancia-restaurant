import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  date: number = new Date().getFullYear();

  nomeFantasia: 'Estância Churrascaria e Pizzaria';

  ngOnInit() {
  }
}
