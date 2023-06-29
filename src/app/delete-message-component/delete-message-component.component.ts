import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-delete-message-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './delete-message-component.component.html',
  styleUrls: ['./delete-message-component.component.css']
})
export class DeleteMessageComponentComponent {
  @Input()message:null | string =null
}
