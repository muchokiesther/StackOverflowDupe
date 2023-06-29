import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})

export class AppComponent {



  message:null | string =null

close(){
  this.message=null
}

showError(){
  this.message='a network issue has occured'
}



  title = 'StackOverflowDupe';
}
