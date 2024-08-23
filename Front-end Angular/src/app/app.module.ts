import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importa FormsModule para usar ngModel
import { HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule para realizar peticiones HTTP
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; // Importa CommonModule para utilizar *ngFor

import { AppComponent } from './app.component'; // Importa AppComponent
import { RegistrarTareaComponent } from './components/registrar-tarea/registrar-tarea.component'; // Importa el componente RegistrarTarea
import { InicioComponent } from './components/inicio/inicio.component'; // Importa el componente Inicio
import { ListarTareasComponent } from './components/listar-tareas/listar-tareas.component'; // Importa el componente ListarTareas

import { routes } from './app.routes'; // Asegúrate de que este archivo contiene las rutas de la aplicación
import { ListarTareasEliminadasComponent } from './components/listar-tareas-eliminadas/listar-tareas-eliminadas.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrarTareaComponent,
    InicioComponent,
    ListarTareasComponent,
    ListarTareasEliminadasComponent // Asegúrate de declarar ListarTareasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // Asegúrate de importar FormsModule aquí
    HttpClientModule, // Asegúrate de importar HttpClientModule para las peticiones HTTP
    RouterModule.forRoot(routes),
    CommonModule, // Asegúrate de importar CommonModule para usar *ngFor
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
