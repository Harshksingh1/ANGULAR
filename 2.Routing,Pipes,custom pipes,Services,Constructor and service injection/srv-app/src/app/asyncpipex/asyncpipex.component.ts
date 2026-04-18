import { Component } from '@angular/core';

@Component({
  selector: 'app-asyncpipex',
  templateUrl: './asyncpipex.component.html',
  styleUrl: './asyncpipex.component.css'
})
export class AsyncpipexComponent {
     pizzaOrder$=new Promise<string>((resolve)=>
    { console.log('pizza Ordered is Received (pending');
      setTimeout(() => {
        console.log('Pizza preparing is started.....');
        setTimeout(()=>{
          resolve('Your Pizza is ready! (Delivered)');
      },5000);
      }, 5000);
    });
}
