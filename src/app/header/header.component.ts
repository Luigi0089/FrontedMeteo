import { Component } from '@angular/core';
import {UserService} from "../../Service/User/user.service";
import {LocalStorageService} from "../../Service/Local-Storage/local-storage.service";
import {NgIf} from "@angular/common";
import {RouterLink} from "@angular/router";
import {FormsModule, NgForm} from "@angular/forms";
import {MeteoService} from "../../Service/MeteoService/meteo.service";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgIf,
    RouterLink,
    FormsModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  Ruolo:number;

  constructor(protected UserService: UserService, private LocalStorage: LocalStorageService, protected MeteoService:MeteoService) {
  }


  Submit(){
    this.LocalStorage.removeItem('token')
    this.UserService.isLogged=false
    this.UserService.isRegistered=false
  }


  OnSubmit(form: NgForm) {
    console.log(this.MeteoService.Cerca);
  this.MeteoService.GetCerca(this.MeteoService.Cerca).subscribe(response =>{
    this.MeteoService.Risposte=response;
  })


  }
}
