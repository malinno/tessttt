import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
products=[
  {proimg:'../assets/3bfce6a2ccd141df885736dec4dd302c_1656286214130609013.jpg'},
  {proimg:'../assets/fcaf978fac204ecaab2c5fa0f7e6e4ce_1562559545238776223.jpeg'},
  {proimg:'../assets/fee3d8721f234ac5bbb1eebec7bee76b_1631597965526896988.png'},
  {proimg:'../assets/Rice_e191965ccd6848a3862e6a695d05983f_1547819238893335910.jpg'},
  {proimg:'../assets/e184c623135b417492ea5ffced334bea_1651649787129504408.png'},
  {proimg:'../assets/FastFood_4710e425c3d24db2aa4280aa207a22d3_1547819143037208832.jpg'},
  {proimg:'../assets/Chicken_d4725da9243a46e79740d2e70fd28314_1547819095170793371.jpg'},
  {proimg:'../assets/f558d88411a04077b1d229c65bd5b589_1656286214316874178.jpg'},
]
  constructor() { }
  showMe:boolean=false
  ngOnInit(): void {
  }
  
   toogleTag(){
    this.showMe=!this.showMe
  }

}
