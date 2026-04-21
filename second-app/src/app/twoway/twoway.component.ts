import { Component } from '@angular/core';

@Component({
  selector: 'app-twoway',
  templateUrl: './twoway.component.html',
  styleUrl: './twoway.component.css'
})
export class TwowayComponent {
   
  emp_name:string='Harsh';
  emp_email:string='harsh@gmail.com';
  emp_salary:number=760000;
}
