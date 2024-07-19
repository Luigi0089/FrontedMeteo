import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router, RouterLink} from "@angular/router";
import {UserService} from "../../Service/User/user.service";
import {LocalStorageService} from "../../Service/Local-Storage/local-storage.service";
import {NgIf} from "@angular/common";
import {UserLog} from "../../Model/UserLog";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    RouterLink
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent{

  constructor(private fb: FormBuilder, protected UserService: UserService, private Router:Router, private LocalStorageService:LocalStorageService) {

  }

  loginRequest: UserLog = new UserLog();


  @Output()
  loginEvent: EventEmitter<UserLog> = new EventEmitter<UserLog>();






  @Input('errore') errore:boolean;



  OnSubmit(form:NgForm){
    if(form.valid){

      this.loginEvent.emit(this.loginRequest);

    }


  }
}
