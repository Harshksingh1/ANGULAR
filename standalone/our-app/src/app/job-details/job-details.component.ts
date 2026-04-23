import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from "@angular/router";
import { JobsService } from '../jobs.service';

@Component({
  selector: 'app-job-details',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './job-details.component.html',
  styleUrl: './job-details.component.css'
})
export class JobDetailsComponent {
  job:any;
  constructor(private srv:JobsService,private route:ActivatedRoute){
    const id=Number(this.route.snapshot.paramMap.get('id'));
    this.job=this.srv.getJobsById(id);
  }
  saveJob(){
    this.srv.saveJobs(this.job);
    alert('Job Saved in SaveJobs');
  }
}
