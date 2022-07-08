import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  imgs = [
    {
      id: 1,
      path: 'assets/5f17e04b49864fa5a095a3af37700dc3_1656286174222701846.jpg',
    },
    {
      id: 2,
      path: 'assets/4d0cc6e97b8449cfb4d5b42d24ddb3a5_1656286044121975544.jpg',
    },
    {
      id: 3,
      path: 'assets/05f437eb12df4f28a75be6d9e1dbc8d6_1645977653568294507.png',
    },
    {
      id: 4,
      path: 'assets/309b808b813e4110b6e1d85dafc1fd9e_1655980678920557386.jpg',
    },
  ];

  titleImg = {
    id: 0,
    path: 'assets/5f17e04b49864fa5a095a3af37700dc3_1656286174222701846.jpg',
  };
  
  constructor() { }

  ngOnInit(): void {
  }
  showImg(path: string): void {
    this.titleImg.path = path;
  }

}
