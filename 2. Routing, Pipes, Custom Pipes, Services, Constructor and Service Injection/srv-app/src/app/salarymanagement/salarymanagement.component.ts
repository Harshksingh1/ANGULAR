import { Component } from '@angular/core';
import { SalaryService } from '../salary.service';

@Component({
  selector: 'app-salarymanagement',
  templateUrl: './salarymanagement.component.html',
  styleUrl: './salarymanagement.component.css'
})
export class SalarymanagementComponent {
    salary: number = 0;
    bonus: number = 0;

    constructor(public obj:SalaryService){
          
        }
    calculate() {
    this.bonus = this.obj.calculateBonus(this.salary);
  }
}
