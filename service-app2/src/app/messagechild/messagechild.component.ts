import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-messagechild',
  templateUrl: './messagechild.component.html',
  styleUrl: './messagechild.component.css'
})
export class MessagechildComponent { 
  @Input() username: string = '';
  @Output() greetingsEvent = new EventEmitter<string>();

  sendGreeting(): void {
    this.greetingsEvent.emit(`Hello, ${this.username}!`);
  }
}
