import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MeteoRicerca} from "../../Model/MeteoRicerca";
import {Observable} from "rxjs";
import {MeteoRicercaRisposta} from "../../Model/MeteoRicercaRisposta";
import {MeteoTemperatura} from "../../Model/MeteoTemperatura";

@Injectable({
  providedIn: 'root'
})
export class MeteoService {

  Cerca: MeteoRicerca = new MeteoRicerca();
  Risposta:MeteoRicercaRisposta=new MeteoRicercaRisposta();
  Risposte:MeteoRicercaRisposta[]=[];
  constructor(private http: HttpClient) { }

  GetCerca(meteoRicerca:MeteoRicerca):Observable<MeteoRicercaRisposta[]>{
    return this.http.get<MeteoRicercaRisposta[]>('http://localhost:8080/api/meteo/nome/'+meteoRicerca.nome);
  }

  GetTemperatura(meteoRicerca:MeteoRicerca):Observable<MeteoTemperatura>{
    return this.http.get<MeteoTemperatura>('http://localhost:8080/api/meteo/temperatura/'+meteoRicerca.nome);
  }
}
