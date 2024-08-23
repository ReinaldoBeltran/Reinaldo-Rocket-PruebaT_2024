import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Tarea } from '../../models/Tarea'; 

@Component({
  selector: 'app-listar-tareas',
  templateUrl: './listar-tareas.component.html',
  styleUrls: ['./listar-tareas.component.css']
})
export class ListarTareasComponent implements OnInit {
  tareas: Tarea[] = []; 

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.obtenerTareas();
  }

  obtenerTareas() {
    this.http.get<Tarea[]>('http://localhost:8080/tareas') 
      .subscribe((data: Tarea[]) => { 
        console.log(data);
        this.tareas = data;
      }, error => {
        console.error('Error al obtener las tareas', error);
      });
  }

  eliminarTarea(id: number) {
    if (confirm('¿Estás seguro de que deseas eliminar esta tarea?')) {
      this.http.delete(`http://localhost:8080/tareas/${id}`)
        .subscribe(() => {
          this.obtenerTareas();
        }, error => {
          console.error('Error al eliminar la tarea', error);
        });
    }
  }
}
