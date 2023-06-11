import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { EditQuestionComponent } from './edit-question/edit-question.component';
import { TagsComponent } from './tags/tags.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AskQuestionPageComponent } from './ask-question-page/ask-question-page.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { QandaPageComponent } from './qanda-page/qanda-page.component';
import { AdminDashboardUsersComponent } from './admin-dashboard-users/admin-dashboard-users.component';
import { AdminDashboardQuestionsComponent } from './admin-dashboard-questions/admin-dashboard-questions.component';

const routes: Routes = [
 {path:'',component:LandingPageComponent},
 {path:'signup',loadComponent:()=> import("./sign-up/sign-up.component").then(c => c.SignUpComponent)},
 {path:'login',loadComponent:()=> import("./login/login.component").then(c=>c.LoginComponent)},
 {path:'home',component:HomePageComponent},
 {path:'profile',component:UserProfileComponent},
 {path:'editprofile',component:EditProfileComponent},
 {path:'editquestion',component: EditQuestionComponent},
 {path:'tags',component:TagsComponent},
 {path:'forgotpassword',component:ForgotPasswordComponent},
 {path:'askquestion',component:AskQuestionPageComponent},
 {path:'resetpassword',component:ResetPasswordComponent},
 {path:'q&a',component:QandaPageComponent},
 {path:'adminquestions',component:AdminDashboardUsersComponent},
 {path:'adminusers',component:AdminDashboardQuestionsComponent} 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
