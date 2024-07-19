import {Component, Input} from '@angular/core';
import {MeteoRicercaRisposta} from "../../Model/MeteoRicercaRisposta";
import {NgIf} from "@angular/common";
import {MeteoService} from "../../Service/MeteoService/meteo.service";

@Component({
  selector: 'app-card-gallery',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './card-gallery.component.html',
  styleUrl: './card-gallery.component.css'
})
export class CardGalleryComponent {
  constructor(protected MeteoService: MeteoService) {
  }
  Temperatura: number;
  pulsante: boolean;
  @Input() paese: MeteoRicercaRisposta;

  Submit():void{
    this.MeteoService.GetTemperatura(this.paese).subscribe(response =>{
     this.Temperatura=response.temperatura;
     this.Temperatura=Math.round(this.Temperatura *100)/100;
     console.log(this.Temperatura);
     this.pulsante=true;
  })
}
}
