import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ShortPipe } from './Pipes/short';
import { HttpClientModule} from '@angular/common/http'
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

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
  
    StoreDevtoolsModule.instrument({ name:'APM Demo App Devtools' ,maxAge: 25, logOnly: !isDevMode() }),  
  
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
