import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { FormsModule, NgForm, } from '@angular/forms';

@Component({
  selector: 'app-ask-question-page',
  standalone: true,
  imports: [CommonModule,FontAwesomeModule,RouterModule,FormsModule],
  templateUrl: './ask-question-page.component.html',
  styleUrls: ['./ask-question-page.component.css']
})
export class AskQuestionPageComponent {
  faArrowLeft = faArrowLeft;
  onSubmit(form:NgForm){
    console.log(form);
    
}
}
