import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { faArrowLeft, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Router, RouterModule } from '@angular/router';
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

  constructor(private questionsService: QuestionsService, private router:Router) { }

  ngOnInit() {
    this.getQuestions();
  }

  getQuestions() {
    this.questionsService.getQuestions().subscribe(
      (res) => {
        this.questions = res;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  deleteQuestion(questionsId:string){
    console.log(questionsId);
    this.questionsService.deleteQuestion(questionsId).subscribe(
      (res) => {  
        this.getQuestions()
     //   this.router.navigate(['adminquestions'])
        //onsole.log(res);
      },
    (error) => {console.log(error);
    }
    )
    
  }

  


}

