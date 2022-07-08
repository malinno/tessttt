import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
imgs =[
  {
    id: 1,
    path: 'assets/5f17e04b49864fa5a095a3af37700dc3_1656286174222701846.jpg',
  },
  {
    id: 2,
    path: 'assets/5f17e04b49864fa5a095a3af37700dc3_1656286174222701846.jpg',
  },
]
  constructor() { }
  showMe:boolean=false
  ngOnInit(): void {
  }
  
   toogleTag(){
    this.showMe=!this.showMe
  }

}
