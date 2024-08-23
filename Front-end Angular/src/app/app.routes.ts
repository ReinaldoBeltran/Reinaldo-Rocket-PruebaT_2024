import { Routes } from '@angular/router';
import { RegistrarTareaComponent } from './components/registrar-tarea/registrar-tarea.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ListarTareasComponent } from './components/listar-tareas/listar-tareas.component';
import { ListarTareasEliminadasComponent } from './components/listar-tareas-eliminadas/listar-tareas-eliminadas.component';

export const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'registrar-tarea', component: RegistrarTareaComponent },
  { path: 'listar-tareas', component: ListarTareasComponent },
  { path: 'listar-tareas-eliminadas', component: ListarTareasEliminadasComponent }
];
