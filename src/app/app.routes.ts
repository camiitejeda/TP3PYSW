import { Routes } from '@angular/router';
import { Punto1Component } from './components/public/punto1/punto1.component';
import { Punto2Component } from './components/public/punto2/punto2.component';

export const routes: Routes = [
  { path: 'punto1', component: Punto1Component },
  { path: 'punto2', component: Punto2Component },
  { path: '', redirectTo: '/punto1', pathMatch: 'full' }
];
