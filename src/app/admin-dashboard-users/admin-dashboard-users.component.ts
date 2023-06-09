import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { faArrowLeft, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Router, RouterModule } from '@angular/router';
import { questions } from '../Interfaces';
import { QuestionsService } from '../services/questions.service';
import { AppState } from '../State/appState';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GetQuestions, deletequestion } from '../State/Actions/questionsActions';
import { getQuestions } from '../State/Reducers/questionsReducer';

@Component({
  selector: 'app-admin-dashboard-users',
  standalone: true,
  imports: [CommonModule,FontAwesomeModule,RouterModule],
  templateUrl: './admin-dashboard-users.component.html',
  styleUrls: ['./admin-dashboard-users.component.css']
})

export class AdminDashboardUsersComponent implements OnInit {
  faTrash = faTrashCan;
  faArrowLeft = faArrowLeft;
  isUserDeleted = false;
  showSuccessMessage = false;
  questions!:Observable<questions[]>
  constructor(private questionsService: QuestionsService, private router:Router,private store:Store<AppState >) { }

  ngOnInit(): void {
    this.getQuestions();
  }

  getQuestions() {

    this.store.dispatch(GetQuestions())
    this.questions = this.store.pipe(select(getQuestions))

  }

  deleteQuestion(questionsId:string){
   this.store.dispatch( deletequestion({questionsId}))

   this.showSuccessMessage = true;
    setTimeout(() => {
      this.hideSuccessMessage();
    }, 1500);
  }

  hideSuccessMessage() {
    this.showSuccessMessage = false;
  }
    
  }

  




