import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { questions } from '../Interfaces';
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { AppState } from '../State/appState';
import { Store, select } from '@ngrx/store';
import { GetQuestions } from '../State/Actions/questionsActions';
import { getQuestions } from '../State/Reducers/questionsReducer';

@Component({
  selector: 'app-tags',
  standalone: true,
  imports: [CommonModule,FontAwesomeModule,RouterModule,FormsModule],
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  faArrowLeft = faArrowLeft;
  searchText: string = '';
  questions!: Observable<questions[]>;
  filteredQuestions: questions[] = [];



  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.getQuestions();
  }

  getQuestions() {
    this.store.dispatch(GetQuestions());
    this.questions = this.store.pipe(select(getQuestions));
    this.filterQuestions(); // Call the filter method initially
  }

  filterQuestions() {
    this.questions.subscribe((data: questions[]) => {
      this.filteredQuestions = data.filter(question =>
        question.tagNames.toLowerCase().includes(this.searchText.toLowerCase())
      );
    });
  }




  
}