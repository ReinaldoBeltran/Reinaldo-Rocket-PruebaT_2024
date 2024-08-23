package com.example.rocketCodeReinaldo.Service;

import com.example.rocketCodeReinaldo.Entity.Tarea;
import com.example.rocketCodeReinaldo.Mapper.TareaMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TareaServicio {

    @Autowired
    private TareaMapper tareaMapper;

    public List<Tarea> obtenerTodasLasTareas() {
        return tareaMapper.encontrarTodas();
    }

    public List<Tarea> obtenerTareasEliminadas() {
        return tareaMapper.encontrarEliminadas();
    }  
    

    public Tarea obtenerTareaPorId(Long id) {
        return tareaMapper.encontrarPorId(id);
    }

    public void guardarTarea(Tarea tarea) {
        tareaMapper.guardar(tarea);
    }

    public void actualizarTarea(Tarea tarea) {
        tareaMapper.actualizar(tarea);
    }

    public void eliminarTarea(Long id) {
        tareaMapper.eliminar(id);
    }
    
}
