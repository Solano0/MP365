<?php
require_once('../../helpers/database.php');
/*
*	Clase para manejar el acceso a datos de la entidad SUBCATEGORIA.
*/
class productoQueries
{
    /*
    *   Métodos para realizar las operaciones SCRUD (search, create, read, update, delete).
    */
    public function searchRows($value)
    {
        $sql = 'SELECT id_producto, nombre_producto, detalle_producto, precio_producto, imagen_producto, estado_producto
                FROM productos
                WHERE nombre_producto ILIKE ? OR detalle_producto ILIKE ?
                ORDER BY nombre_producto';
        $params = array("%$value%", "%$value%");
        return Database::getRows($sql, $params);
    }

    public function createRow()
    {
        $sql = 'INSERT INTO productos(nombre_producto, detalle_producto, precio_producto, imagen_producto, estado_producto, id_usuario, id_sub_categoria)
                VALUES(?, ?, ?, ?, ?, ?, ?)';
        $params = array($this->nombre_producto, $this->detalle_producto, $this->precio_producto, $this->imagen_producto, $this->estado_producto, $this->usuario, $this->subCategoria);
        return Database::executeRow($sql, $params);
    }

    public function readAll()
    {
        $sql = 'SELECT id_producto, nombre_producto, detalle_producto, precio_producto, imagen_producto, estado_producto, usuario, nombre_sub_categoria
                FROM productos
                INNER JOIN usuarios USING(id_usuario)
                INNER JOIN sub_categorias USING(id_sub_categoria)
                ORDER BY nombre_producto';
        return Database::getRows($sql);
    }

    public function readOne()
    {
        $sql = 'SELECT id_producto, nombre_producto, detalle_producto, precio_producto, imagen_producto, estado_producto, usuario, nombre_sub_categoria
                FROM productos
                INNER JOIN usuarios USING(id_usuario)
                INNER JOIN sub_categorias USING(id_sub_categoria)
                WHERE id_producto = ?';
        $params = array($this->id_producto);
        return Database::getRow($sql, $params);
    }

    public function updateRow($current_image)
    {
        // Se verifica si existe una nueva imagen para borrar la actual, de lo contrario se mantiene la actual.
        ($this->imagen_producto) ? Validator::deleteFile($this->getRuta(), $current_image) : $this->imagen_producto = $current_image;

        $sql = 'UPDATE productos
                SET nombre_producto = ?, detalle_producto = ?, precio_producto = ?, imagen_producto = ?, estado_producto = ?, id_usuario = ?, id_sub_categoria = ?
                WHERE id_producto = ?';
        $params = array($this->nombre_producto, $this->detalle_producto, $this->precio_producto, $this->imagen_producto, $this->estado_producto, $this->usuario, $this->subCategoria, $this->id_producto);
        return Database::executeRow($sql, $params);
    }

    public function deleteRow()
    {
        $sql = 'DELETE FROM productos
                WHERE id_producto = ?';
        $params = array($this->id_producto);
        return Database::executeRow($sql, $params);
    }

    public function readUsuarios()
    {
        $sql = 'SELECT id_usuario, usuario
                FROM usuarios';
            return Database::getRows($sql);
    }

    public function readSubCategorias()
    {
        $sql = 'SELECT id_sub_categoria, nombre_sub_categoria
                FROM sub_categorias';
            return Database::getRows($sql);
    }

    public function readProductossubCategoria()
    {
        $sql = 'SELECT id_producto, nombre_producto, detalle_producto, precio_producto, imagen_producto, estado_producto, usuario, nombre_sub_categoria
                FROM productos
                INNER JOIN usuarios USING(id_usuario)
                INNER JOIN sub_categorias USING(id_sub_categoria)
                WHERE id_sub_categoria = ?
                ORDER BY nombre_producto';
        $params = array($this->id_producto);
        return Database::getRows($sql, $params);
    }

}