package com.example.rocketCodeReinaldo.Controller;

import com.example.rocketCodeReinaldo.Entity.Tarea;
import com.example.rocketCodeReinaldo.Service.TareaServicio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/tareas")
public class TareaControlador {

    @Autowired
    private TareaServicio tareaServicio;

    @GetMapping
    public List<Tarea> obtenerTodasLasTareas() {
        return tareaServicio.obtenerTodasLasTareas();
    }

    @GetMapping("/{id}")
    public Tarea obtenerTareaPorId(@PathVariable Long id) {
        return tareaServicio.obtenerTareaPorId(id);
    }

    @PostMapping
    public void guardarTarea(@RequestBody Tarea tarea) {
        tareaServicio.guardarTarea(tarea);
    }

    @PutMapping("/{id}")
    public void actualizarTarea(@PathVariable Long id, @RequestBody Tarea tarea) {
        tarea.setId(id);
        tareaServicio.actualizarTarea(tarea);
    }

    @DeleteMapping("/{id}")
    public void eliminarTarea(@PathVariable Long id) {
        tareaServicio.eliminarTarea(id);
    }

    @GetMapping("/eliminadas")
    public List<Tarea> obtenerTareasEliminadas() {
    return tareaServicio.obtenerTareasEliminadas();
    }

}
