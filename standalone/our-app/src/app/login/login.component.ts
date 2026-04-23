import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  userpass: string = '';
  login() {
    if (this.username === 'Harsh' && this.userpass === 'Harsh1234') {
      alert('Login successful');
    } else {
      alert('Username and password not matching');
    }
  }
}
