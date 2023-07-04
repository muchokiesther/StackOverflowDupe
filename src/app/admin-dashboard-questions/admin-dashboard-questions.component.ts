import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowLeft, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { Router, RouterModule } from '@angular/router';
import { User } from '../Interfaces';
import { UserServiceService } from '../services/user-service.service';
import { AppState } from '../State/appState';
import { Store, select } from '@ngrx/store';
import { GetUsers, deleteuser } from '../State/Actions/userActions';
import { getUsers } from '../State/Reducers/userReducer';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../Pipes/filterpipe.pipe';

@Component({
    selector: 'app-admin-dashboard-questions',
    standalone: true,
    templateUrl: './admin-dashboard-questions.component.html',
    styleUrls: ['./admin-dashboard-questions.component.css'],
    imports: [CommonModule, FontAwesomeModule, RouterModule, FormsModule, FilterPipe]
})
export class AdminDashboardQuestionsComponent implements OnInit {
  faTrash = faTrashCan;
  faArrowLeft = faArrowLeft;
  isUserDeleted = false;
  showSuccessMessage = false;
  searchTerm: string = '';

  constructor(
    private userService: UserServiceService,
    private store: Store<AppState>,
    public authservice: AuthService,
    private router: Router
  ) {}

  users!: Observable<User[]>;

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.store.dispatch(GetUsers());
    this.users = this.store.pipe(select(getUsers));
  }

  getUserById(userId: string) {
    this.store.dispatch(deleteuser({ userId }));

    // Show success message
    this.showSuccessMessage = true;
    setTimeout(() => {
      this.hideSuccessMessage();
    }, 1500);
  }

  hideSuccessMessage() {
    this.showSuccessMessage = false;
  }
}
