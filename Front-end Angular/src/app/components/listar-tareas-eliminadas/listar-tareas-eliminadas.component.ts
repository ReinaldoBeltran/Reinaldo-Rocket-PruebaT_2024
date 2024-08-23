import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Tarea } from '../../models/Tarea';

@Component({
  selector: 'app-listar-tareas-eliminadas',
  templateUrl: './listar-tareas-eliminadas.component.html',
  styleUrl: './listar-tareas-eliminadas.component.css'
})
export class ListarTareasEliminadasComponent implements OnInit{
  tareas: Tarea[] = []; 

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.obtenerTareas();
  }

  obtenerTareas() {
    this.http.get<Tarea[]>('http://localhost:8080/tareas/eliminadas')
      .subscribe((data: Tarea[]) => { 
        console.log(data);
        this.tareas = data;
      }, error => {
        console.error('Error al obtener las tareas', error);
      });
  }

  
}
