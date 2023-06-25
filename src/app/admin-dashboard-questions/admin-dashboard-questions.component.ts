import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowLeft, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { RouterModule } from '@angular/router';
import { User } from '../Interfaces';
import { UserServiceService } from '../services/user-service.service';

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
  users: User[] = [];
  constructor(private userService:UserServiceService){}
  ngOnInit(): void {
  this.loadUsers();

  }

  
  loadUsers() {
    this.userService.getUsers().subscribe((users: User[]) => {
      this.users = users;
    });
  }

getUserById(userId: string) {
    this.userService.getUserById(userId).subscribe(
      (users: User[]) => {
        // Handle the retrieved users here
      },
      error => {
        // Handle the error here
      }
    );
  }

}
