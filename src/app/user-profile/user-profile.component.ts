import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowLeft, faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../services/auth.service';
import { AppState } from '../State/appState';
import { Store, select } from '@ngrx/store';
import { GetUserQuestions } from '../State/Actions/questionsActions';
import { Observable } from 'rxjs';
import { questions } from '../Interfaces';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule, RouterModule, FontAwesomeModule],
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  showPreviouslyAnswered: boolean = false;
  faTrash = faTrashCan;
  faPen = faPen;
  faArrowLeft = faArrowLeft;
 
 questions!: Observable<questions[]>;

  constructor(public authservice: AuthService, private store: Store<AppState>) {
    this.store.dispatch(GetUserQuestions())
    this.questions = this.store.select(state=>state.question.Questions) 
  }


 

  togglePreviouslyAnswered() {
    this.showPreviouslyAnswered = !this.showPreviouslyAnswered;
  }
}
