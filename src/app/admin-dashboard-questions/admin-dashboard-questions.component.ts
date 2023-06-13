import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowLeft, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { RouterModule } from '@angular/router';

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

  ngOnInit(): void {
  
  }
}
