import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-response-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './response-modal.component.html',
  styleUrl: './response-modal.component.scss'
})
export class ResponseModalComponent {
  @Input() mailStatus : string = '';
  @Input() message : string = "";
  @Input() loading : boolean = false;

  // Output property to emit an event when the modal is closed
  @Output() close: EventEmitter<void> = new EventEmitter<void>();

  closeModal(){
    this.close.emit(); // Emit the 'close' event to notify the parent component
  }

}
 