import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSidenav } from '@angular/material/sidenav';
import { ContactoComponent } from '../contacto/contacto.component';
@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;

  constructor(private dialog: MatDialog) {}

  abrirFormularioContacto() {
    this.dialog.open(ContactoComponent, {
      width: '400px'
    });
  }
}
