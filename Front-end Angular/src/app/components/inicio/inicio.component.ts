import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  
  constructor(private router: Router) {}

  irARegistro() {
    this.router.navigate(['/registrar-tarea']);
  }
  irAListar() {
    this.router.navigate(['/listar-tareas']);
  }
  irAListarDeAlta() {
    this.router.navigate(['/listar-tareas-eliminadas']);
  }
}
