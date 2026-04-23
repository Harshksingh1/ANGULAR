import { Component, OnInit } from '@angular/core';
import { PassportService } from '../../services/passport.service';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
    constructor(public srv:PassportService){

    }
    resetForm(form?:NgForm){
      if(form!=null){form.resetForm()}
      else{
        this.srv.passportData={Id:0,HolderName:'',PassportNumber:'',ExpiryDate:'',PPOCode:''}
      }
    }
    ngOnInit():void{
      this.resetForm();
    }
    createpassport(form:NgForm){
      this.srv.postPassport().subscribe(res=>{
        this.resetForm();
        alert('passport creation success!!!');
        this.srv.getPassportsList();},
        err=>{alert('Error !!!'+err);})
    }
}
