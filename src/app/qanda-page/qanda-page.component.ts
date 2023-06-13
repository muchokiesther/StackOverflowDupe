import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { faArrowLeft, faComment, faPaperPlane, faTrophy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-qanda-page',
  standalone: true,
  imports: [CommonModule,RouterModule,FontAwesomeModule,FormsModule],
  templateUrl: './qanda-page.component.html',
  styleUrls: ['./qanda-page.component.css']
})
export class QandaPageComponent {
  faTrophy = faTrophy;
  faPaperPlane = faPaperPlane;
  faComment = faComment
  faArrowLeft = faArrowLeft;

  onSubmit(form:NgForm){
    console.log(form);
    
}
}
