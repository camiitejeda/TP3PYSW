import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Producto {
  nombre: string;
  precio: number;
  imagen: string;
  descripcion: string;
  cantidad?: number;
}

@Component({
  selector: 'app-punto2',
  templateUrl: './punto2.component.html',
  styleUrls: ['./punto2.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class Punto2Component implements OnInit {
  productos: Producto[] = [
    {
      nombre: 'Notebook HP',
      precio: 1431900,
      imagen: '/notebook.jpeg',
      descripcion: 'Notebook HP 15.6" Intel Core i5, 8GB RAM, 256GB SSD'
    },
    {
      nombre: 'Monitor LG',
      precio: 477300,
      imagen: '/monitor.jpeg',
      descripcion: 'Monitor LG 24" Full HD, 75Hz, HDMI'
    },
    {
      nombre: 'Teclado Mecánico',
      precio: 143190,
      imagen: '/teclado.jpeg',
      descripcion: 'Teclado mecánico RGB, switches blue'
    },
    {
      nombre: 'Mouse Gaming',
      precio: 79550,
      imagen: '/mouse.jpeg',
      descripcion: 'Mouse gaming RGB, 6 botones programables'
    },
    {
      nombre: 'Auriculares Sony',
      precio: 206830,
      imagen: '/auriculares.jpeg',
      descripcion: 'Auriculares inalámbricos con cancelación de ruido'
    },
    {
      nombre: 'Webcam Logitech',
      precio: 127280,
      imagen: '/webcam.jpeg',
      descripcion: 'Webcam Full HD 1080p con micrófono integrado'
    }
  ];

  carrito: Producto[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  estaEnCarrito(producto: Producto): boolean {
    return this.carrito.some(p => p.nombre === producto.nombre);
  }

  agregarAlCarrito(producto: Producto): void {
    const productoEnCarrito = this.carrito.find(p => p.nombre === producto.nombre);
    if (productoEnCarrito) {
      productoEnCarrito.cantidad = (productoEnCarrito.cantidad || 1) + 1;
    } else {
      this.carrito.push({...producto, cantidad: 1});
    }
  }

  quitarDelCarrito(producto: Producto): void {
    const index = this.carrito.findIndex(p => p.nombre === producto.nombre);
    if (index !== -1) {
      const productoEnCarrito = this.carrito[index];
      if (productoEnCarrito.cantidad && productoEnCarrito.cantidad > 1) {
        productoEnCarrito.cantidad--;
      } else {
        this.carrito.splice(index, 1);
      }
    }
  }

  eliminarDelCarrito(index: number): void {
    this.carrito.splice(index, 1);
  }

  calcularTotal(): number {
    return this.carrito.reduce((total, producto) => 
      total + (producto.precio * (producto.cantidad || 1)), 0);
  }

  getCantidadEnCarrito(producto: Producto): number {
    const productoEnCarrito = this.carrito.find(p => p.nombre === producto.nombre);
    return productoEnCarrito?.cantidad || 0;
  }
}
