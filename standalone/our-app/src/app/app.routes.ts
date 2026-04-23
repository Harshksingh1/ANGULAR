import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { ApplyJobComponent } from './apply-job/apply-job.component';
import { SavedJobsComponent } from './saved-jobs/saved-jobs.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'job/:id',component:JobDetailsComponent},
    {path:'saved',component:SavedJobsComponent},
    {path:'apply/:id',component:ApplyJobComponent}
];
