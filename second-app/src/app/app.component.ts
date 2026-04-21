import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'second-app';
  products:any=[
    {pid:1,pname:'Laptop',price:234599},
     {pid:2,pname:'Mobile',price:234599},
      {pid:3,pname:'Keyboard',price:234599},
       {pid:4,pname:'Monitor',price:12349},
  ]
}
