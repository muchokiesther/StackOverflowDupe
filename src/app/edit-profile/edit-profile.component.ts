import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UserServiceService } from '../services/user-service.service';
import { NewUser, User, addUserSuccess } from '../Interfaces';

@Component({
  selector: 'app-edit-profile',
  standalone: true,
  imports: [CommonModule, FormsModule, FontAwesomeModule, RouterModule],
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent {
  faArrowLeft = faArrowLeft;
  newUser: NewUser = {
   
    userName: '',
    email: '',
    password: '',
  
  };

  constructor(private userService: UserServiceService) {}

  onSubmit(form: NgForm) {
    console.log(form.value);
    this.userService.updateUser(form.value).subscribe(
      (response: addUserSuccess) => {
        console.log(response);
    
      },
      error => {
        console.error(error);
   
      }
    );
    
  }

 
}




