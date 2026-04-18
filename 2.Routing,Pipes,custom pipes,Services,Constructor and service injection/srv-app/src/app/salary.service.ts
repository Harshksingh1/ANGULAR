import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SalaryService {

  constructor() { }
  calculateBonus(salary: number): number {
    return salary * 0.10;
  }
}
