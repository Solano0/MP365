<?php
require_once('../../helpers/validator.php');
require_once('../../entities/dao/categoria_queries.php');
/*
*	Clase para manejar la transferencia de datos de la entidad CATEGORIA.
*/
class Categoria extends CategoriaQueries
{
    // Declaración de atributos (propiedades).
    protected $id_categoria = null;
    protected $nombre_categoria = null;
    protected $imagen_categoria = null;
    protected $descripcion_categoria = null;
    protected $categoria = null;
    protected $ruta = '../../images/categorias/';

    /*
    *   Métodos para validar y asignar valores de los atributos.
    */
    public function setId($value)
    {
        if (Validator::validateNaturalNumber($value)) {
            $this->id_categoria = $value;
            return true;
        } else {
            return false;
        }
    }

    public function setNombre($value)
    {
        if (Validator::validateAlphanumeric($value, 1, 50)) {
            $this->nombre_categoria = $value;
            return true;
        } else {
            return false;
        }
    }

    public function setImagen($file)
    {
        if (Validator::validateImageFile($file, 500, 500)) {
            $this->imagen_categoria = Validator::getFileName();
            return true;
        } else {
            return false;
        }
    }

    public function setDescripcion($value)
    {
        if ($value) {
            if (Validator::validateString($value, 1, 250)) {
                $this->descripcion_categoria = $value;
                return true;
            } else {
                return false;
            }
        } else {
            $this->descripcion_categoria = null;
            return true;
        }
    }

    public function setCategorias($value)
    {
        if(Validator::validateNaturalNumber($value)){
            $this->categoria = $value;
            return true;
        } else {
            return false;
        }
    }

    /*
    *   Métodos para obtener valores de los atributos.
    */
    public function getId()
    {
        return $this->id_categoria;
    }

    public function getImagen()
    {
        return $this->imagen_categoria;
    }

    public function getNombre()
    {
        return $this->nombre_categoria;
    }

    public function getDescripcion()
    {
        return $this->descripcion_categoria;
    }

    public function getCategorias()
    {
        return $this->categoria;
    }

    public function getRuta()
    {
        return $this->ruta;
    }
}
