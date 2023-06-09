import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
 {path:'',component:LandingPageComponent},
 {path:'signup',loadComponent:()=> import("./sign-up/sign-up.component").then(c => c.SignUpComponent)},
 {path:'login',loadComponent:()=> import("./login/login.component").then(c=>c.LoginComponent)},
 {path:'home',component:HomePageComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
