import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Cust1Component } from './cust1/cust1.component';
import { Cust2Component } from './cust2/cust2.component';
import { AsyncpipexComponent } from './asyncpipex/asyncpipex.component';
import { ServiceExampleComponent } from './service-example/service-example.component';
import { SalarymanagementComponent } from './salarymanagement/salarymanagement.component';

const routes: Routes = [
  {path:'',component:Cust1Component},
  {path:'cust2',component:Cust2Component},
  {path:'apipe',component:AsyncpipexComponent},
  {path:'srv',component:ServiceExampleComponent},
  {path:'salary',component:SalarymanagementComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
