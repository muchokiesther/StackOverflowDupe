import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { faArrowLeft, faComment, faPaperPlane, faTrophy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { CommentsService } from '../services/comments.service';
import { QuestionsService } from '../services/questions.service';
import { answers, comments, questions } from '../Interfaces';
import { Observable } from 'rxjs';
import { AnswersService } from '../services/answers.service';
import { AppState } from '../State/appState';
import { Store } from '@ngrx/store';
import { upVote } from '../State/Actions/answerActions';
import { downvote } from '../State/Actions/answerActions';

import * as answerActions from '../State/Actions/answerActions';
@Component({
  selector: 'app-qanda-page',
  standalone: true,
  imports: [CommonModule, RouterModule, FontAwesomeModule, FormsModule],
  templateUrl: './qanda-page.component.html',
  styleUrls: ['./qanda-page.component.css']
})
export class QandaPageComponent implements OnInit {
  faTrophy = faTrophy;
  faPaperPlane = faPaperPlane;
  faComment = faComment;
  faArrowLeft = faArrowLeft;
  questionsId!: string; 
  answerId!:string
  showCommentbar= false;
  showComment = false;
  isAnswerPreferred: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private commentsService: CommentsService,
    private questionsService: QuestionsService,
    private answerService:AnswersService,
   private store:Store<AppState>
  ) {}

  questions!:questions
  answers: answers[] = [];
  comments: comments[]=[]
 //answers!:Observable<answers[]>

  ngOnInit(): void {
    this.questionsId = this.route.snapshot.params['questionsId']; 
    this.questionsService.getOneQuestion(this.questionsId).subscribe(
      (response: questions) => {
        
        console.log(response);
        this.questions = response
      },
      (error) => {
        
        console.error(error);
      }
    );


    // this.questionsId = this.route.snapshot.params['questionsId']; 
    this.answerService. getAnswersByQuestionId(this.questionsId).subscribe(
      (response: answers[]) => {
        
        console.log(response);
        this.answers= response
      },
      (error) => {
        
        console.error(error);
      }
    );

    const storedAnswerPreferred = localStorage.getItem('answerPreferred');
    this.isAnswerPreferred = storedAnswerPreferred === 'true';
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    this.answerService.addAnswer(this.questionsId,form.value).subscribe(
      (response) => {
        console.log(response);
    
      },
      error => {
        console.error(error);
   
      }
    );

  
    
  }
  upvote(answerId: string) {
    this.store.dispatch(upVote({ answerId: answerId }));
  }

  downvote(answerId: string) {
    this.store.dispatch(downvote({ answerId: answerId }));
  }
  
  sendComments(value: string, answerId: string) {
    console.log(value);
    console.log(answerId);
    this.answerId = answerId;
  
    this.commentsService.addComment(this.questionsId, value, answerId)
      .subscribe(
        (response) => {
          console.log(response);
          // this.comments = response;
          
          this.viewComments(); 
        },
        (error) => {
          console.error(error);
        }
      );
  }
viewComments()
{ this.commentsService.getComments(this.answerId).subscribe(
    (response:comments[]) => {
      
      console.log(response);
      this.comments= response
    },
    (error) => {
      
      console.error(error);
    }
  );

  }


  setAnswerAsPreferred(answerId: string) {
    this.isAnswerPreferred = !this.isAnswerPreferred; // Toggle the checkbox state
    localStorage.setItem('answerPreferred', this.isAnswerPreferred.toString()); // Store the checkbox state in localStorage

    this.store.dispatch(answerActions.setPreferredAnswer({ answerId }));
  }



}
