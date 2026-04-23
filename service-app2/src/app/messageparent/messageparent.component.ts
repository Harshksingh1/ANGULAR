import { Component } from '@angular/core';

@Component({
  selector: 'app-messageparent',
  templateUrl: './messageparent.component.html',
  styleUrl: './messageparent.component.css'
})
export class MessageparentComponent {
  username: string = 'Harsh';
  greetingMessage: string = '';

  receiveGreeting(message: string): void {
    this.greetingMessage = message;
  }
}
