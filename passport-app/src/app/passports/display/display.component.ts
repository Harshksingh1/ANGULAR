import { Component, OnInit } from '@angular/core';
import { PassportService } from '../../services/passport.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-display',
  standalone: true,
  imports: [FormsModule,HttpClientModule,CommonModule],
  templateUrl: './display.component.html',
  styleUrl: './display.component.css'
})
export class DisplayComponent implements OnInit{
   constructor(public srv:PassportService)
   {

   }
  ngOnInit(): void {
   
    this.srv.getPassportsList();
   
  }
  fillform(selectedPassport){
    this.srv.passportData=Object.assign({},selectedPassport);
  }
  onDelete(pid){
    if(confirm('Are you sure to delete the passport?'))
    {
      this.srv.deletePassport(pid).subscribe
      (
        res=>{
          alert('passport Deleted!!!')
          this.srv.getPassportsList();
        },
        err=>{
          alert('Error!!!'+err);
        }
      )
    }
  }   
}
