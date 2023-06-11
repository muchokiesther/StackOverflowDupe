import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { AdminDashboardQuestionsComponent } from './admin-dashboard-questions/admin-dashboard-questions.component';
import { AdminDashboardUsersComponent } from './admin-dashboard-users/admin-dashboard-users.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LandingPageComponent,
    HomePageComponent,
    UserProfileComponent,
    EditProfileComponent,
   EditQuestionComponent,
   TagsComponent,
   ForgotPasswordComponent,
   AskQuestionPageComponent,
   ResetPasswordComponent,
   QandaPageComponent,
   AdminDashboardQuestionsComponent,
   AdminDashboardUsersComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
