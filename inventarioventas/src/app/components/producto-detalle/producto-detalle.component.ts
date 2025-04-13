import { Component } from '@angular/core';

@Component({
  selector: 'app-producto-detalle',
  standalone: false,
  templateUrl: './producto-detalle.component.html',
  styleUrl: './producto-detalle.component.css'
})
export class ProductoDetalleComponent {
  producto = {
    id: 1,
    nombre: 'Camiseta Clásica',
    descripcion: 'Una camiseta cómoda y moderna. hechas 100% de algodon ',
    imagen: 'https://www.aisope.com.pe/images/HZQM/NDBH0550_10.jpg',
    precio: 29.99,
    tallas: [
      { nombre: 'S', stock: 5 },
      { nombre: 'M', stock: 0 },
      { nombre: 'L', stock: 8 }
    ]
  };
  
}
