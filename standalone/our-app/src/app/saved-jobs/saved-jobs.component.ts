import { Component } from '@angular/core';
import { JobsService } from '../jobs.service';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-saved-jobs',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './saved-jobs.component.html',
  styleUrl: './saved-jobs.component.css'
})
export class SavedJobsComponent {
  savedJobs:any[]=[];
  constructor(private srv:JobsService){
    this.savedJobs=srv.getSavedJob();
  }
}
