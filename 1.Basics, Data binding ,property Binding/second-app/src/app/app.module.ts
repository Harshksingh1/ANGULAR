import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { FormsModule } from '@angular/forms';
import { EmployeesComponent } from './employees/employees.component';
import { TeamInfoComponent } from './team-info/team-info.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    EmployeesComponent,
    TeamInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
 
  ],
  providers: [],
  bootstrap: [TeamInfoComponent]
})
export class AppModule { }
