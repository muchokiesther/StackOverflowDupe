import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { faArrowLeft, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { questions } from '../Interfaces';
import { QuestionsService } from '../services/questions.service';

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
  questions: questions[] = [];

  constructor(private questionsService: QuestionsService) { }

  ngOnInit() {
    this.getQuestions();
  }

  getQuestions() {
    this.questionsService.getQuestions().subscribe(
      (data: questions[]) => {
        this.questions = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }


  deleteQuestion(questionsId: string) {
    this.questionsService.deleteQuestion(questionsId).subscribe(
      (data: questions[]) => {
        // Handle successful deletion, if needed
        console.log('Question deleted successfully');
        this.getQuestions(); // Refresh the questions list
      },
      (error) => {
        console.log(error);
      }
    );
  }


}

