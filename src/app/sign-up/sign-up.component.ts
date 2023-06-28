import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, AbstractControl, Validators, FormBuilder } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { UserServiceService } from '../services/user-service.service';
import { AppState } from '../State/appState';
import { Store } from '@ngrx/store';
import { Addusers } from '../State/Actions/userActions';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, RouterModule],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  constructor(private router:Router, private fb:FormBuilder,private userService:UserServiceService,private store:Store <AppState>) { }
  form!: FormGroup
errorMessage=null
  ngOnInit(): void {
    this.form = this.fb.group({
      userName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
    }, {
      validators: this.passwordMatchValidator
    });
  }
  
  //using abstract control to mostly does not allow ones data to be submited if passwords dont match its a is a custom validator function
  passwordMatchValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    return password === confirmPassword ? null : { 'passwordsDoNotMatch': true };
  }

  onSubmit(){


    this.store.dispatch(Addusers({newUser:this.form.value})),
    this.router.navigate(['/login']);
    // this.userService.addUser(this.form.value).subscribe(
    //   res=>{
    // console.log ( res.message )
    // this.router.navigate(['/login']);
    //   },
    //   err=>{
    //   this.errorMessage=err.message
    //   }
    // )
  
    }





    
}
