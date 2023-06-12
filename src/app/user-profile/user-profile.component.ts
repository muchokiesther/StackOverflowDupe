import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  showPreviouslyAnswered: boolean = false;

  togglePreviouslyAnswered() {
    this.showPreviouslyAnswered = !this.showPreviouslyAnswered;
  }
}
