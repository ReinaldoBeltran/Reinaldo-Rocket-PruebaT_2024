-->Script para crear la base de datos base 
CREATE TABLE tareas ( id BIGSERIAL PRIMARY KEY, nombre VARCHAR(255) NOT NULL, descripcion TEXT, fecha_inicio DATE );

-->Implementación de la base de datos para gestionar las tareas que van siendo "eliminadas", entonces las manejé con una columna booleana para no eliminarlas como tal, sino para llevar el registro de las tareas que aún están vigentes y las que ya fueron eliminadas

ALTER TABLE tareas ADD COLUMN estado BOOLEAN DEFAULT TRUE;
