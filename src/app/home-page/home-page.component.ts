import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { QuestionsService } from '../services/questions.service';
import { questions } from '../Interfaces';
import { GetQuestions } from '../State/Actions/questionsActions';
import { Store, select } from '@ngrx/store';
import { AppState } from '../State/appState';
import { Observable } from 'rxjs';
import { getQuestions } from '../State/Reducers/questionsReducer';
import { FormsModule } from '@angular/forms'; // Add this line

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, RouterModule, FontAwesomeModule, FormsModule], // Include FormsModule here
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  showSidebar = false;
  searchText: string = ''; // Add this line

  constructor(private store: Store<AppState>) { }
  
  ngOnInit() {
    this.getQuestions();
  }

  questions!: Observable<questions[]>;

  getQuestions() {
    this.store.dispatch(GetQuestions());
    this.questions = this.store.pipe(select(getQuestions));
  }
}
