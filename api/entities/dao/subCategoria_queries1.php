<?php
require_once('../../helpers/database.php');
/*
*	Clase para manejar el acceso a datos de la entidad SUBCATEGORIA.
*/
class SubCategoriaQueries
{
    /*
    *   Métodos para realizar las operaciones SCRUD (search, create, read, update, delete).
    */
    public function searchRows($value)
    {
        $sql = 'SELECT id_sub_categoria, nombre_sub_categoria, descripcion_sub_categoria, imagen_sub_categoria, id_categoria
                FROM sub_categorias
                WHERE nombre_sub_categoria ILIKE ? OR descripcion_sub_categoria ILIKE ?
                ORDER BY nombre_sub_categoria';
        $params = array("%$value%", "%$value%");
        return Database::getRows($sql, $params);
    }

    public function createRow()
    {
        $sql = 'INSERT INTO sub_categorias(nombre_sub_categoria, descripcion_sub_categoria, imagen_sub_categoria, id_categoria)
                VALUES(?, ?, ?, ?)';
        $params = array($this->nombre_sub_categoria, $this->descripcion_sub_categoria, $this->imagen_sub_categoria, $this->categoria);
        return Database::executeRow($sql, $params);
    }

    public function readAll()
    {
        $sql = 'SELECT id_sub_categoria, nombre_sub_categoria, descripcion_sub_categoria, imagen_sub_categoria, nombre_categoria
                FROM sub_categorias
                INNER JOIN categorias USING(id_categoria)
                ORDER BY nombre_sub_categoria';
        return Database::getRows($sql);
    }

    public function readOne()
    {
        $sql = 'SELECT id_sub_categoria, nombre_sub_categoria, descripcion_sub_categoria, imagen_sub_categoria, id_categoria
                FROM sub_categorias
                INNER JOIN categorias USING(id_categoria)
                WHERE id_sub_categoria = ?';
        $params = array($this->id_sub_categoria);
        return Database::getRow($sql, $params);
    }

    public function updateRow($current_image)
    {
        // Se verifica si existe una nueva imagen para borrar la actual, de lo contrario se mantiene la actual.
        ($this->imagen_sub_categoria) ? Validator::deleteFile($this->getRuta(), $current_image) : $this->imagen_sub_categoria = $current_image;

        $sql = 'UPDATE sub_categorias
                SET nombre_sub_categoria = ?, descripcion_sub_categoria = ?, imagen_sub_categoria = ?, id_categoria = ?
                WHERE id_sub_categoria = ?';
        $params = array($this->nombre_sub_categoria, $this->descripcion_sub_categoria, $this->imagen_sub_categoria, $this->categoria, $this->id_sub_categoria);
        return Database::executeRow($sql, $params);
    }

    public function deleteRow()
    {
        $sql = 'DELETE FROM sub_categorias
                WHERE id_sub_categoria = ?';
        $params = array($this->id_sub_categoria);
        return Database::executeRow($sql, $params);
    }

    public function readCategorias()
    {
        $sql = 'SELECT id_categoria, nombre_categoria
                FROM categorias';
            return Database::getRows($sql);
    }
}
