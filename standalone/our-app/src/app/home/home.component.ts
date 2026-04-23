import { Component } from '@angular/core';
import { JobsService } from '../jobs.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
 jobs: any[] = [];
  constructor(private srv: JobsService) {
    this.jobs = this.srv.getjobs();
  }
}
