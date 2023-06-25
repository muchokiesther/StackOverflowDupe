import { Component, OnInit } from '@angular/core';
import { CommonModule} from '@angular/common';
import { ReactiveFormsModule,FormControlName,FormGroup,FormControl,Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  constructor(private router:Router, private userService:UserServiceService){}
form!:FormGroup
errorMessage=null
ngOnInit(): void {
  this.form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });
}


onSubmit(){

    this.userService.loginUser(this.form.value).subscribe(
      res => {
        this.errorMessage = null;
        localStorage.setItem('token', res.token);
        localStorage.setItem('role', res.role);
        localStorage.setItem('username', res.username);
  
        // Check if the role is "admin" and redirect accordingly
        if (res.role === 'admin') {
          this.router.navigate(['/adminusers']);
        } else {
          this.router.navigate(['/home']);
        }
      },
      err => {
        this.errorMessage = err.error.message;
      }
    );
  }
  



}
