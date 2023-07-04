import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-errormessages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './errormessages.component.html',
  styleUrls: ['./errormessages.component.css']
})
export class ErrormessagesComponent {
  @Input() message!:string | null
  @Output() close:EventEmitter<string> = new EventEmitter()

  closed(){
    this.message=null
  }
}
