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

  @Output() close: EventEmitter<void> = new EventEmitter<void>();

  closeModal(){
    this.close.emit();
  }

}
 