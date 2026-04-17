import { Component } from '@angular/core';

interface Slide {
  id: number;
  image: string;
  title: string;
}

@Component({
  selector: 'app-carousel',
  imports: [],
  templateUrl: './carousel.html',
  styleUrl: './carousel.css',
})

export class CarouselComponent {
  slides: Slide[] = [
    {
      id: 1,
      image: 'forest.jpg',
      title: 'Forest Image'
    },
    {
      id: 2,
      image: 'lavender.jpg',
      title: 'Lavender Field'
    },
    {
      id: 3,
      image: 'river.jpg',
      title: 'River View'
    }
  ];
  currentIndex: number = 0;

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }

  goToSlide(index: number) {
    this.currentIndex = index;
  }
}
