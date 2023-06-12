import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard-users',
  standalone: true,
  imports: [CommonModule,FontAwesomeModule,RouterModule],
  templateUrl: './admin-dashboard-users.component.html',
  styleUrls: ['./admin-dashboard-users.component.css']
})
export class AdminDashboardUsersComponent {
  faTrash = faTrashCan;
}
