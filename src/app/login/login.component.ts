import { Component, OnInit } from '@angular/core';
import { CommonModule} from '@angular/common';
import { ReactiveFormsModule,FormControlName,FormGroup,FormControl,Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
form!:FormGroup
ngOnInit(): void {
  this.form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });
}


onSubmit(){
if(!this.form.invalid){
  console.log(this.form.value)
}else{
  console.log("invalid")
}
}
}
