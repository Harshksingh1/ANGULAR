import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'service-app2';
  salary:number=0;
  bonus:number=0;
  receivebonus(bonusRc:number){
    this.bonus=bonusRc;
  }
}
