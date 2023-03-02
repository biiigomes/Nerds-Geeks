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
    { url: '../../../../assets/img/Corvos_Cobras.png' } 
  ];
}
