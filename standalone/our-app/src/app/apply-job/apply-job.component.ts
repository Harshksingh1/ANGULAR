import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-apply-job',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './apply-job.component.html',
  styleUrl: './apply-job.component.css'
})
export class ApplyJobComponent {
   jobId:number=0;
   name:string='';
   constructor(private route:ActivatedRoute){
    this.jobId=Number(this.route.snapshot.paramMap.get('id'));
   }
   apply(){
    alert(`mr.\\ms ${this.name} applied for Job Id ${this.jobId}`)
   }
}
