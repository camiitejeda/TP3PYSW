import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Noticia {
  titulo: string;
  noticia: string;
  img: string;
}

@Component({
  selector: 'app-punto1',
  templateUrl: './punto1.component.html',
  styleUrls: ['./punto1.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class Punto1Component implements OnInit {
  noticias: Noticia[] = [
    {
      titulo: 'Avances en Inteligencia Artificial',
      noticia: 'La IA revoluciona la forma en que interactuamos con la tecnología, desde asistentes virtuales hasta sistemas de reconocimiento facial.',
      img: '/ia-news.jpg'
    },
    {
      titulo: 'Innovación en Energías Renovables',
      noticia: 'Nuevas tecnologías solares prometen aumentar la eficiencia energética en un 40% para el próximo año.',
      img: '/energia-news.jpg'
    },
    {
      titulo: 'Desarrollo Web Moderno',
      noticia: 'Angular 17 introduce mejoras significativas en el rendimiento y la experiencia de desarrollo.',
      img: '/web-news.jpg'
    }
  ];

  currentIndex: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.noticias.length;
  }

  prevSlide(): void {
    this.currentIndex = (this.currentIndex - 1 + this.noticias.length) % this.noticias.length;
  }
}
