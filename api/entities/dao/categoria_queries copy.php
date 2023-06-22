<?php
require_once('../../helpers/database.php');
/*
*	Clase para manejar el acceso a datos de la entidad CATEGORIA.
*/
class CategoriaQueries
{
    /*
    *   Métodos para realizar las operaciones SCRUD (search, create, read, update, delete).
    */
    public function searchRows($value)
    {
        $sql = 'SELECT id_categoria, nombre_categoria, descripcion_categoria, imagen_categoria, 
                FROM categorias
                WHERE nombre_categoria ILIKE ? OR descripcion_categoria ILIKE ?
                ORDER BY nombre_categoria';
        $params = array("%$value%", "%$value%");
        return Database::getRows($sql, $params);
    }

    public function createRow()
    {
        $sql = 'INSERT INTO categorias(nombre_categoria, descripcion_categoria, imagen_categoria)
                VALUES(?, ?, ?)';
        $params = array($this->nombre_categoria, $this->descripcion_categoria, $this->imagen_categoria);
        return Database::executeRow($sql, $params);
    }

    public function readAll()
    {
        $sql = 'SELECT id_categoria, nombre_categoria, descripcion_categoria, imagen_categoria
                FROM categorias
                ORDER BY nombre_categoria';
        return Database::getRows($sql);
    }
    
    public function readOne()
    {
        $sql = 'SELECT id_categoria, nombre_categoria, descripcion_categoria, imagen_categoria
                FROM categorias
                WHERE id_categoria = ?';
        $params = array($this->id_categoria);
        return Database::getRow($sql, $params);
    }

    public function updateRow($current_image)
    {
        // Se verifica si existe una nueva imagen para borrar la actual, de lo contrario se mantiene la actual.
        ($this->imagen_categoria) ? Validator::deleteFile($this->getRuta(), $current_image) : $this->imagen_categoria = $current_image;

        $sql = 'UPDATE categorias
                SET nombre_categoria = ?, descripcion_categoria = ?, imagen_categoria = ?
                WHERE id_categoria = ?';
        $params = array($this->nombre_categoria, $this->descripcion_categoria, $this->imagen_categoria, $this->id_categoria);
        return Database::executeRow($sql, $params);
    }

    public function deleteRow()
    {
        $sql = 'DELETE FROM categorias
                WHERE id_categoria = ?';
        $params = array($this->id_categoria);
        return Database::executeRow($sql, $params);
    }

    
}
