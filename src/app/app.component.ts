import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {HeaderComponent} from "./header/header.component";
import {Router} from "@angular/router";
import {FooterComponent} from "./footer/footer.component";
import {CardDbComponent} from "./card-db/card-db.component";
import {NgIf} from "@angular/common";
import {UserService} from "../Service/User/user.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent, HeaderComponent, FooterComponent, CardDbComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Test_Finale';

  constructor(private Router: Router, protected UserService:UserService) {
  }


}
