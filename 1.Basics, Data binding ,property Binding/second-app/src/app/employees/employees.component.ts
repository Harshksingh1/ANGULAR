import { Component } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css'
})
export class EmployeesComponent {
    emps:any=[
      {eid:1,ename:'Harsh',esalary:233456,edoj:'12/12/22'},
      {eid:2,ename:'Harsh',esalary:233456,edoj:'12/12/22'},
      {eid:3,ename:'Harsh',esalary:233456,edoj:'12/12/22'},
      {eid:4,ename:'Harsh',esalary:233456,edoj:'12/12/22'},
      {eid:5,ename:'Harsh',esalary:233456,edoj:'12/12/22'},
    ]
}
