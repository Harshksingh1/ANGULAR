import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrl: './interpolation.component.css'
})
export class InterpolationComponent {
       user_id:number=101;
       user_name:string='Harsh1234';
  profile_pic:string='assets/images/Profile.jpeg';
}
