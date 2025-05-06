import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { CardsComponent } from './components/layout/cards/cards.component';
import { Punto1Component } from './components/public/punto1/punto1.component';
import { Punto2Component } from './components/public/punto2/punto2.component';
import { Punto3Component } from './components/public/punto3/punto3.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    CardsComponent,
    Punto1Component,
    Punto2Component,
    Punto3Component
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TP3PYSW';
}
