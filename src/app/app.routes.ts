import { Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {AggiornaPasswordComponent} from "./aggiorna-password/aggiorna-password.component";
import {LoginRootComponent} from "./login-root/login-root.component";
import {CardGalleryComponent} from "./card.gallery/card.gallery.component";
import {CardContenitorComponent} from "./card-contenitor/card-contenitor.component";

export const routes: Routes = [
  {path:'Home', redirectTo:'', component: AppComponent},
  {path:'login', component : LoginRootComponent},
  {path:'register', component : RegisterComponent},
  {path:'modifica', component: AggiornaPasswordComponent},
  {path:'trovati',component: CardContenitorComponent}
];
