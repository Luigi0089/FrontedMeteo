import { Component } from '@angular/core';
import {FormsModule, NgForm} from "@angular/forms";
import {UserService} from "../../Service/User/user.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  constructor(protected UserService: UserService, private  Router: Router) {
  }


  OnSubmit(form:NgForm){
    if(form.valid){

      this.UserService.PostReg(this.UserService.UtenteReg).subscribe(response =>{
        this.UserService.isRegistered=true;
        console.log('Utente Registrato');
        this.Router.navigate(['/Home'])
      })
    }
  }

}
