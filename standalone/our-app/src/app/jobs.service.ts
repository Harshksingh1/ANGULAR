import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JobsService {
   constructor() { }
    jobs=[
      {id:1,title:'.Net Developer',company:'IBM',exp:'Fresher'},
      {id:2,title:'Java Developer',company:'Accenture',exp:'Fresher'},
      {id:3,title:'React Developer',company:'Capgemini',exp:'Experienced'},
      {id:4,title:'Python Developer',company:'Congnizant',exp:'Intermediate'},
    ];

    savedJob:any[]=[];
    getjobs(){
      return this.jobs;
    }
    getJobsById(id:number){
      return this.jobs.find(j=>j.id==id);
    }
    saveJobs(job:any){
      this.savedJob.push(job);
    }
    getSavedJob(){
      return this.savedJob;
    }
  
}
