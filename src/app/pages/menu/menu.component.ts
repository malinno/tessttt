import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
products =[
  {proimg:'../assets/3bfce6a2ccd141df885736dec4dd302c_1656286214130609013.jpg'},
  {proimg:'../assets/4c692fd8cc8346418cc3114ea5416eb8_1626626103599152116.png'},
  {proimg:'../assets/4d0cc6e97b8449cfb4d5b42d24ddb3a5_1656286044121975544.jpg'},
  {proimg:'../assets/104af8b23cf74dddb66b3c5075709045_1656285942458961076.jpg'},
  {proimg:'../assets/47fb706697934f51a5dea0b42baf8425_1566796477826686107.jpg'},
  {proimg:'../assets/3bfce6a2ccd141df885736dec4dd302c_1656286214130609013.jpg'},
  {proimg:'../assets/3bfce6a2ccd141df885736dec4dd302c_1656286214130609013.jpg'},
  {proimg:'../assets/3bfce6a2ccd141df885736dec4dd302c_1656286214130609013.jpg'},



]
  constructor() { }
showMe:boolean=false
  ngOnInit(): void {
   
  }
  toogleTag(){
    this.showMe=!this.showMe
  }

}
