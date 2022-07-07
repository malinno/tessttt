import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './pages/cart/cart.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { MenuComponent } from './pages/menu/menu.component';
import { PayComponent } from './pages/pay/pay.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'menu',component:MenuComponent},
  {path:'contact',component:ContactComponent},
  {path:'Register',component:RegisterComponent},
  {path:'productdetails',component:ProductDetailsComponent},
  {path:'cart',component:CartComponent},
  {path:'pay',component:PayComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
