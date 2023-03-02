import { CommonModule } from "@angular/common";
import { Input, NgModule } from "@angular/core";
import { HomeComponent } from "src/app/components/home/home.component";
import { ImageSliderComponent } from './image-slider/image-slider.component';
import { SlideInterface } from "./slide.interface";

@NgModule ({
    imports: [CommonModule],
    declarations: [ImageSliderComponent],
    exports: [ImageSliderComponent]
})

export class ImageSliderModule {
    
}