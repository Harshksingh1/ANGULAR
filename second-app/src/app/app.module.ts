import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { FormsModule } from '@angular/forms';
import { EmployeesComponent } from './employees/employees.component';
import { TeamInfoComponent } from './team-info/team-info.component';
import { HomeComponent } from './home/home.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PropertyComponent } from './property/property.component';
import { TwowayComponent } from './twoway/twoway.component';
import { ExerciseProfessionComponent } from './exercise-profession/exercise-profession.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    EmployeesComponent,
    TeamInfoComponent,
    HomeComponent,
    EventbindingComponent,
    InterpolationComponent,
    PropertyComponent,
    TwowayComponent,
    ExerciseProfessionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
 
  ],
  providers: [],
  bootstrap: [ExerciseProfessionComponent]
})
export class AppModule { }
