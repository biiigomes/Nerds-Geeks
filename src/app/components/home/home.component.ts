import { Component, Input } from '@angular/core';
import { SlideInterface } from 'src/app/shared/slider/slide.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  slides: SlideInterface[] = [
    { url: '../../../../assets/img/EMBLA.png' },
    { url: '../../../../assets/img/Apocalipse.png' },
    { url: '../../../../assets/img/Corvos_Cobras.png' }, 
    { url: '../../../../assets/img/Vida_Com_Você.png' },
    { url: '../../../../assets/img/Rainha_Perversa.png' },  
    { url: '../../../../assets/img/PCPS.png' },
    { url: '../../../../assets/img/Filha_Artemis.png' },
    { url: '../../../../assets/img/Elo_Entre_Nós.png' },
    { url: '../../../../assets/img/Dragão_Ancestral.png' },    
    { url: '../../../../assets/img/Deusa_Inferno.png' }, 
    { url: '../../../../assets/img/Cobras_Dragões.png' }, 
    { url: '../../../../assets/img/Agenda_namorados.png' }, 
  ];
}
