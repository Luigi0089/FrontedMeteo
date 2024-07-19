import { Injectable } from '@angular/core';
import {UserLog} from "../../Model/UserLog";
import {UserReg} from "../../Model/UserReg";
import {UserLoginResponse} from "../../Model/UserLoginResponse";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ModificaPassword} from "../../Model/ModificaPassword";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isLogged: boolean;
  isRegistered: boolean;
  UtenteLog:UserLog=new UserLog();
  UtenteReg:UserReg=new UserReg();
  UserLoginResponse: UserLoginResponse=new UserLoginResponse();
  constructor(private http: HttpClient) { }

  PostReg(userReg :UserReg):Observable<any>{
    return this.http.post('http://localhost:8080/api/utente/reg',userReg);
  }

  PostLog(userLog :UserLog):Observable<any>{
    return this.http.post('http://localhost:8080/api/utente/login',userLog);
  }

  PutPassword(modificaPassword: ModificaPassword):Observable<any>{
    return this.http.put('http://localhost:8080/api/utente/password',modificaPassword);
  }
}
