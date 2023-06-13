import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowLeft, faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule,RouterModule,FontAwesomeModule],
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  showPreviouslyAnswered: boolean = false;

  togglePreviouslyAnswered() {
    this.showPreviouslyAnswered = !this.showPreviouslyAnswered;
  }

  faTrash = faTrashCan;
  faPen = faPen;
  faArrowLeft = faArrowLeft;
}
