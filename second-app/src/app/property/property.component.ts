import { Component } from '@angular/core';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrl: './property.component.css'
})
export class PropertyComponent {
   emp_name:string='Harsh';
   img_url:string='assets/images/Profile.jpeg';
   isDisable:boolean=false;
}
