import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AsyncpipexComponent } from './asyncpipex/asyncpipex.component';
import { NavComponent } from './nav/nav.component';
import { CubePipe } from './cube.pipe';
import { DataPipe } from './data.pipe';
import { Cust2Component } from './cust2/cust2.component';
import { Cust1Component } from './cust1/cust1.component';
import { ServiceExampleComponent } from './service-example/service-example.component';
import { SalarymanagementComponent } from './salarymanagement/salarymanagement.component';

@NgModule({
  declarations: [
    AppComponent,
    Cust1Component,
    Cust2Component,
    AsyncpipexComponent,
    NavComponent,
    CubePipe,
    DataPipe,
    ServiceExampleComponent,
    SalarymanagementComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
