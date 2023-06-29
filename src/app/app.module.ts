import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ShortPipe } from './Pipes/short';
import { HttpClientModule} from '@angular/common/http'
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {userReducer} from './State/Reducers/userReducer'
import { UserEffects } from './State/Effects/userEffects';
import { questionsReducer } from './State/Reducers/questionsReducer';
import { QuestionsEffects } from './State/Effects/questionsEffects';
import { answerReducer } from './State/Reducers/answerReducers';
import { AnswerEffects } from './State/Effects/answerEffects';

@NgModule({
  declarations: [
    AppComponent,
    ShortPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    StoreModule.forRoot({user:userReducer , question:questionsReducer, answer:answerReducer}, {}),
    EffectsModule.forRoot([UserEffects,QuestionsEffects,AnswerEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }