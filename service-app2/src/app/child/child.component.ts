import { Component, EventEmitter,Input,Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
    @Input() salary:number=0;
    @Output() bonusEvent=new EventEmitter<number>();
    calculatebunus(){
      const bonus=this.salary*0.15;
      this.bonusEvent.emit(bonus);
    }
}
