package com.example.rocketCodeReinaldo.Mapper;

import com.example.rocketCodeReinaldo.Entity.Tarea;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface TareaMapper {

 

    //listado de tareas vigentes 1
    @Select("SELECT id, nombre, descripcion, fecha_inicio AS fechaInicio FROM tareas WHERE estado = TRUE")
    List<Tarea> encontrarTodas();

    //listado de tareas eliminadas
    @Select("SELECT id, nombre, descripcion, fecha_inicio AS fechaInicio FROM tareas WHERE estado = FALSE")
    List<Tarea> encontrarEliminadas();


    @Select("SELECT id, nombre, descripcion, fecha_inicio FROM tareas WHERE id = #{id}")
    Tarea encontrarPorId(Long id);

    @Insert("INSERT INTO tareas(nombre, descripcion, fecha_inicio) VALUES(#{nombre}, #{descripcion}, #{fechaInicio})")
    @Options(useGeneratedKeys = true, keyProperty = "id")
    void guardar(Tarea tarea);

    @Update("UPDATE tareas SET nombre = #{nombre}, descripcion = #{descripcion}, fecha_inicio = #{fechaInicio} WHERE id = #{id}")
    void actualizar(Tarea tarea);

    @Update("UPDATE tareas SET estado = FALSE WHERE id = #{id}")
    void eliminar(Long id);

}
