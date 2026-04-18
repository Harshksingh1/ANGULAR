import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {
   student_name:string='Harsh';
   image_path:string='https://tse2.mm.bing.net/th/id/OIP.HAtLogH3ouyYYAV4f-ZHfgHaEK?pid=Api&P=0&h=180'
    welcome(){
    alert('Welcome to Angular');
     }
}
