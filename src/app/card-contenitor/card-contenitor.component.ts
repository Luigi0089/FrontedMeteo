import {Component, Input} from '@angular/core';
import {MeteoService} from "../../Service/MeteoService/meteo.service";
import {NgForOf} from "@angular/common";
import {MeteoRicercaRisposta} from "../../Model/MeteoRicercaRisposta";
import {CardGalleryComponent} from "../card-gallery/card-gallery.component";

@Component({
  selector: 'app-card-contenitor',
  standalone: true,
  imports: [
    NgForOf,
    CardGalleryComponent
  ],
  templateUrl: './card-contenitor.component.html',
  styleUrl: './card-contenitor.component.css'
})
export class CardContenitorComponent {

  constructor(protected MeteoService: MeteoService) {
  }

}
