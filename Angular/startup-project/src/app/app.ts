import { Component, signal } from '@angular/core';
import { FooterComponent } from './components/footer/footer';
import { HeaderComponent } from './components/header/header';
import { CardListComponent } from './components/card-list/card-list';
import { InputsComponent } from './components/inputs/inputs';
import { CarouselComponent } from './components/carousel/carousel';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    FooterComponent,
    CardListComponent,
    InputsComponent,
    CarouselComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
}
