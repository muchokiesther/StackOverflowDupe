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
    res=>{
  console.log ( res )
  this.router.navigate(['/home']);
    },
    err=>{
    this.errorMessage=err.error.message
    }
  )

// if(!this.form.invalid ){ 
//   if(this.form.get('email')?.value === "admin@gmail.com" )
//   {this.router.navigate(['/adminusers'])}else{
//     console.log(this.form.value)
//     this.router.navigate(['/home'])
//   }

// }else{
//   console.log("invalid")
// }
}



}
