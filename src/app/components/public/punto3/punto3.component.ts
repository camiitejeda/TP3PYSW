import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-punto3',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './punto3.component.html',
  styleUrls: ['./punto3.component.css']
})
export class Punto3Component implements OnInit {
  // Palabras del juego (animales)
  palabras: string[] = [
    'ELEFANTE',
    'JIRAFA',
    'LEON',
    'TIGRE',
    'RINOCERONTE',
    'HIPOPOTAMO',
    'CANGURO',
    'PINGUINO',
    'DELFIN',
    'ORCA'
  ];

  palabraSecreta: string = '';
  palabraOculta: string[] = [];
  letrasUsadas: string[] = [];
  intentosRestantes: number = 6;
  juegoTerminado: boolean = false;
  mensaje: string = '';
  categoria: string = 'Animales';
  letraIngresada: string = '';

  ngOnInit() {
    this.iniciarJuego();
  }

  iniciarJuego() {
    // Seleccionar palabra aleatoria
    this.palabraSecreta = this.palabras[Math.floor(Math.random() * this.palabras.length)];
    // Inicializar palabra oculta con guiones
    this.palabraOculta = Array(this.palabraSecreta.length).fill('_');
    this.letrasUsadas = [];
    this.intentosRestantes = 6;
    this.juegoTerminado = false;
    this.mensaje = '';
  }

  verificarLetra() {
    if (this.letraIngresada.length !== 1) {
      this.mensaje = 'Por favor, ingresa una sola letra';
      return;
    }

    const letra = this.letraIngresada.toUpperCase();
    
    if (this.letrasUsadas.includes(letra)) {
      this.mensaje = 'Ya usaste esta letra';
      return;
    }

    this.letrasUsadas.push(letra);
    let letraEncontrada = false;

    // Verificar si la letra está en la palabra
    for (let i = 0; i < this.palabraSecreta.length; i++) {
      if (this.palabraSecreta[i] === letra) {
        this.palabraOculta[i] = letra;
        letraEncontrada = true;
      }
    }

    if (!letraEncontrada) {
      this.intentosRestantes--;
      if (this.intentosRestantes === 0) {
        this.juegoTerminado = true;
        this.mensaje = `¡Perdiste! La palabra era ${this.palabraSecreta}`;
      }
    } else {
      // Verificar si ganó
      if (!this.palabraOculta.includes('_')) {
        this.juegoTerminado = true;
        this.mensaje = '¡Felicitaciones! ¡Ganaste!';
      }
    }

    this.letraIngresada = '';
  }

  getImagenAhorcado(): string {
    // Retorna la ruta de la imagen según los intentos restantes
    // La imagen 7 es la de "perdiste"
    if (this.intentosRestantes === 0) {
      return '/ahorcado/7.png';
    }
    const intentosUsados = 6 - this.intentosRestantes;
    return `/ahorcado/${intentosUsados + 1}.png`;
  }
}