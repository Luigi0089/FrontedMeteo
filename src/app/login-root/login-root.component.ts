import {Component, Input, input} from '@angular/core';
import {LoginComponent} from "../login/login.component";
import {UserService} from "../../Service/User/user.service";
import {LocalStorageService} from "../../Service/Local-Storage/local-storage.service";
import {Router} from "@angular/router";
import {UserLog} from "../../Model/UserLog";

@Component({
  selector: 'app-login-root',
  standalone: true,
  imports: [
    LoginComponent
  ],
  templateUrl: './login-root.component.html',
  styleUrl: './login-root.component.css'
})
export class LoginRootComponent {
  errore:boolean;



  constructor(private UserService: UserService, private Router:Router, private LocalStorageService:LocalStorageService) {
  }



  setEmail(utente:UserLog): void {
    console.log(utente);
    this.UserService.UtenteLog.email=utente.email;
    this.UserService.UtenteLog.password=utente.password;
    console.log(this.UserService.UtenteLog);

    setTimeout(()=>{
      this.errore=true;
    }, 500)
    this.UserService.PostLog(this.UserService.UtenteLog).subscribe(response =>{

      if(response){

        this.LocalStorageService.setItem('token',response.token);
        if(this.LocalStorageService.getItem('token')){
          this.errore=false

        }

        console.log('item: ',this.LocalStorageService.getItem('token'));
        this.UserService.UserLoginResponse=response;
        this.UserService.UserLoginResponse.token=null;
        this.UserService.UserLoginResponse.ttl=null;
        this.UserService.UserLoginResponse.tokenCreationTime=null;

        this.UserService.isLogged=true;
        this.Router.navigate(['Home'])
      }

    })

  }
}
