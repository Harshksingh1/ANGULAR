import { Component } from '@angular/core';

@Component({
  selector: 'app-exercise-profession',
  templateUrl: './exercise-profession.component.html',
  styleUrl: './exercise-profession.component.css'
})
export class ExerciseProfessionComponent {
  
   employees = [
    { name: 'Harsh', doj: '2022-01-15', salary: 60000, profession: 'Developer' },
    { name: 'Anjali', doj: '2021-03-10', salary: 50000, profession: 'HR' },
    { name: 'Rohit', doj: '2020-07-22', salary: 55000, profession: 'Tester' },
    { name: 'Simran', doj: '2019-11-05', salary: 70000, profession: 'Manager' },
    { name: 'Amit', doj: '2023-02-18', salary: 62000, profession: 'Developer' },
    { name: 'Neha', doj: '2021-08-30', salary: 48000, profession: 'HR' },
    { name: 'Karan', doj: '2022-06-12', salary: 53000, profession: 'Tester' },
    { name: 'Priya', doj: '2018-04-25', salary: 80000, profession: 'Manager' }
  ];
}
