import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UserServiceService } from '../services/user-service.service';
import { NewUser, User, addUserSuccess } from '../Interfaces';
import { AppState } from '../State/appState';
import { Store } from '@ngrx/store';
import { Updateusers } from '../State/Actions/userActions';

@Component({
  selector: 'app-edit-profile',
  standalone: true,
  imports: [CommonModule, FormsModule, FontAwesomeModule, RouterModule],
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent {
  faArrowLeft = faArrowLeft;
  form!: NgForm;

  constructor(private userService: UserServiceService,private store:Store<AppState>) {}

  onSubmit(form: NgForm) {
    this.form = form;
    this.store.dispatch(Updateusers({updatedUser:this.form.value}));
  }
}
