import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.css'
})
export class UserInfoComponent {
  userForm=new FormGroup(
    {
      username:new FormControl('',Validators.required),
      useremail:new FormControl('',[Validators.required,Validators.email]),
      userpassword:new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(10)]),
    }
  )
  reg(){
    alert('Registration succes (User Info): Username: '+this.userForm.value.username+' Useremail: '+this.userForm.value.useremail);
  }
}
