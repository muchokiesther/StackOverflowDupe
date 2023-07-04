import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule,Validators,  ReactiveFormsModule,FormArray, FormControl } from '@angular/forms';
import { QuestionsService } from '../services/questions.service';
import { NewQuestion, Tag, addQuestionSuccess } from '../Interfaces';
import { Addquestion } from '../State/Actions/questionsActions';
import { Store } from '@ngrx/store';
import { AppState } from '../State/appState';

@Component({
  selector: 'app-ask-question-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,FontAwesomeModule,RouterModule,FormsModule],
  templateUrl: './ask-question-page.component.html',
  styleUrls: ['./ask-question-page.component.css']
})
export class AskQuestionPageComponent implements OnInit {
  constructor(private questionsService:QuestionsService, private fb: FormBuilder, private store:Store<AppState>){}
  form!: FormGroup
  ngOnInit(): void {
    this.form = this.fb.group({
      title: ['', Validators.required],
      body: ['', Validators.required],
      TAGS:this.fb.array([])
    });
  }
  faArrowLeft = faArrowLeft;

  onSubmit() {
    this.store.dispatch(Addquestion({newquestion:this.form.value}))
    alert('Question added successfully!');
    
  }

  
    addtag(){
      const control= new FormControl(null, [Validators.required]);
      (this.form.get('TAGS') as FormArray).push(control)
    }
  
    getControls(){
     return (this.form.get('TAGS') as FormArray).controls
    }
  
    removetag(i:number){
      (this.form.get('TAGS') as FormArray).removeAt(i)
    }
  }



 


