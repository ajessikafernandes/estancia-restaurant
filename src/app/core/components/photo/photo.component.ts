import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

  galleryImagesList: Array<any> = ([
    { image: 'assets/img/1.PNG'},
    { image: 'assets/img/2.PNG'},
    { image: 'assets/img/3.PNG'},
    { image: 'assets/img/4.PNG'},
    { image: 'assets/img/5.PNG'},
    { image: 'assets/img/6.PNG'},
    { image: 'assets/img/7.PNG'},
  ]);
  screenWidth: number;
  sizeWindow: 1;

  constructor() {
  }

  ngOnInit() {}

}
