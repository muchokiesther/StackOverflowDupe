import { Component, OnInit } from '@angular/core';
import { CommonModule} from '@angular/common';
import { ReactiveFormsModule,FormControlName,FormGroup,FormControl,Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { UserServiceService } from '../services/user-service.service';
import { AppState } from '../State/appState';
import { Store } from '@ngrx/store';
import { Userlogin } from '../State/Actions/userActions';
// import { AppState } from '../State/appState';
// import { GetUsers } from '../State/Actions/userActions';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  constructor(private router:Router, private userService:UserServiceService,private store:Store<AppState>){}
form!:FormGroup
errorMessage=null
ngOnInit(): void {
  this.form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });
 
}


onSubmit(){

  this.store.dispatch(Userlogin({user:this.form.value}))
  }




}
