import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { EditQuestionComponent } from './edit-question/edit-question.component';

const routes: Routes = [
 {path:'',component:LandingPageComponent},
 {path:'signup',loadComponent:()=> import("./sign-up/sign-up.component").then(c => c.SignUpComponent)},
 {path:'login',loadComponent:()=> import("./login/login.component").then(c=>c.LoginComponent)},
 {path:'home',component:HomePageComponent},
 {path:'profile',component:UserProfileComponent},
 {path:'editprofile',component:EditProfileComponent},
 {path:'editquestion',component: EditQuestionComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
