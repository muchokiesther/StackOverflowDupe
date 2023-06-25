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
  user: User = {
    userId: '',
    userName: '',
    email: '',
    password: '',
    emailSent: 0,
    isDeleted: 0,
    roles: ''
  };

  constructor(private userService: UserServiceService) {}

  onSubmit(form: NgForm) {
    // Handle form submission if needed
  }

  updateUser() {
    this.userService.updateUser(this.user.userId, this.user).subscribe(
      (response: addUserSuccess) => {
        // Handle the success response here
        console.log(response);
      },
      error => {
        // Handle the error here
        console.error(error);
      }
    );
  }
}
