import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowLeft, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { RouterModule } from '@angular/router';
import { User } from '../Interfaces';
import { UserServiceService } from '../services/user-service.service';
import { AppState } from '../State/appState';
import { Store, select } from '@ngrx/store';
import { GetUsers } from '../State/Actions/userActions';
import { getUsers } from '../State/Reducers/userReducer';
import { Observable } from 'rxjs';
;

@Component({
  selector: 'app-admin-dashboard-questions',
  standalone: true,
  imports: [CommonModule,FontAwesomeModule,RouterModule],
  templateUrl: './admin-dashboard-questions.component.html',
  styleUrls: ['./admin-dashboard-questions.component.css']
})
export class AdminDashboardQuestionsComponent implements OnInit {
  faTrash = faTrashCan;
  faArrowLeft = faArrowLeft;
  // users: User[] = [];
  constructor(private userService:UserServiceService, private store:Store<AppState >){}
  users!:Observable<User[]>
  ngOnInit(): void {
  this.loadUsers();
 
  }

  

  loadUsers() {
    this.store.dispatch(GetUsers());
    this.users = this.store.pipe(select(getUsers));
  }

getUserById(userId: string) {
    this.userService.getUserById(userId).subscribe(
      (res) => {
        this.loadUsers();
      },
      (error) => {
       
      }
    );
  }

}
