import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, FormArray, ReactiveFormsModule, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { AppState } from '../State/appState';
import { Store } from '@ngrx/store';
import { Updatequestion } from '../State/Actions/questionsActions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-question',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterModule,FontAwesomeModule,  ReactiveFormsModule],
  templateUrl: './edit-question.component.html',
  styleUrls: ['./edit-question.component.css']
})
export class EditQuestionComponent implements OnInit {

  form!:FormGroup;
questionsId!:string
constructor(private formBuilder: FormBuilder,private store:Store<AppState>,private route:ActivatedRoute) {}
ngOnInit() :void {
  this.form = this.formBuilder.group({
    title: ['', Validators.required],
    body: ['', Validators.required],
    TAGS:this.formBuilder.array([])
  });
}

onSubmit() {
  this.questionsId = this.route.snapshot.params['questionsId']
  this.store.dispatch(Updatequestion({questionsId:this.questionsId,newquestion:this.form.value}))

  
  // if (this.form.valid) {
  //  console.log(this.form.value);
   
  // }
}


faArrowLeft = faArrowLeft;




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
