import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-tarea',
  templateUrl: './registrar-tarea.component.html',
  styleUrls: ['./registrar-tarea.component.css']
})
export class RegistrarTareaComponent {
  tarea = {
    nombre: '',
    descripcion: '',
    fechaInicio: ''
  };

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    this.http.post('http://localhost:8080/tareas', this.tarea)
      .subscribe(response => {
        console.log('Tarea registrada con éxito', response);
        this.router.navigate(['/']);
      }, error => {
        console.error('Error al registrar la tarea', error);
      });
  }
}
