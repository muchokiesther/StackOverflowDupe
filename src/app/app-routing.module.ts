import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 {path:'',loadComponent:()=> import("./landing-page/landing-page.component").then(c=>c.LandingPageComponent)},

 {path:'signup',loadComponent:()=> import("./sign-up/sign-up.component").then(c => c.SignUpComponent)},

 {path:'login',loadComponent:()=> import("./login/login.component").then(c=>c.LoginComponent)},

 {path:'home',loadComponent:()=> import("./home-page/home-page.component").then(c=>c.HomePageComponent)},

 {path:'profile',loadComponent:()=> import("./user-profile/user-profile.component").then(c=>c.UserProfileComponent)},

 {path:'editprofile',loadComponent:()=> import("./edit-profile/edit-profile.component").then(c=>c.EditProfileComponent)},

 {path:'editquestion',loadComponent:()=> import("./edit-question/edit-question.component").then(c=>c.EditQuestionComponent)},

 {path:'tags',loadComponent:()=> import("./tags/tags.component").then(c=>c.TagsComponent)},

 {path:'forgotpassword',loadComponent:()=> import("./forgot-password/forgot-password.component").then(c=>c.ForgotPasswordComponent)},

 {path:'askquestion',loadComponent:()=> import("./ask-question-page/ask-question-page.component").then(c=>c.AskQuestionPageComponent)},

 {path:'resetpassword',loadComponent:()=>import("./reset-password/reset-password.component").then(c=>c.ResetPasswordComponent)},

 {path:'q&a',loadComponent:()=>import("./qanda-page/qanda-page.component").then(c=>c.QandaPageComponent)},

 {path:'adminusers',loadComponent:()=>import("./admin-dashboard-questions/admin-dashboard-questions.component").then(c=>c.AdminDashboardQuestionsComponent)},
 
 {path:'adminquestions',loadComponent:()=>import("./admin-dashboard-users/admin-dashboard-users.component").then(c=>c.AdminDashboardUsersComponent)} ,
 {path:'allquestions',loadComponent:()=>import("./all-questions/all-questions.component").then(c=>c.AllQuestionsComponent)}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
