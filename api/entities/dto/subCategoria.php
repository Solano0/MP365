<?php
require_once('../../helpers/validator.php');
require_once('../../entities/dao/subCategoria_queries.php');
/*
*	Clase para manejar la transferencia de datos de la entidad CATEGORIA.
*/
class SubCategoria extends SubCategoriaQueries
{
    // Declaración de atributos (propiedades).
    protected $id_sub_categoria = null;
    protected $nombre_sub_categoria = null;
    protected $imagen_sub_categoria  = null;
    protected $descripcion_sub_categoria  = null;
    protected $categoria = null;
    protected $ruta = '../../images/subCategorias/';

    /*
    *   Métodos para validar y asignar valores de los atributos.
    */
    public function setId($value)
    {
        if (Validator::validateNaturalNumber($value)) {
            $this->id_sub_categoria = $value;
            return true;
        } else {
            return false;
        }
    }

    public function setNombre($value)
    {
        if (Validator::validateAlphanumeric($value, 1, 50)) {
            $this->nombre_sub_categoria = $value;
            return true;
        } else {
            return false;
        }
    }

    public function setImagen($file)
    {
        if (Validator::validateImageFile($file, 500, 500)) {
            $this->imagen_sub_categoria = Validator::getFileName();
            return true;
        } else {
            return false;
        }
    }

    public function setDescripcion($value)
    {
        if ($value) {
            if (Validator::validateString($value, 1, 100)) {
                $this->descripcion_sub_categoria = $value;
                return true;
            } else {
                return false;
            }
        } else {
            $this->descripcion_sub_categoria = null;
            return true;
        }
    }

    public function setCategoria($value)
    {
        if (Validator::validateNaturalNumber($value)) {
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
        return $this->id_sub_categoria;
    }

    public function getImagen()
    {
        return $this->imagen_sub_categoria;
    }

    public function getNombre()
    {
        return $this->nombre_sub_categoria;
    }

    public function getDescripcion()
    {
        return $this->descripcion_sub_categoria;
    }

    public function getCategoria()
    {
        return $this->categoria;
    }

    public function getRuta()
    {
        return $this->ruta;
    }
}
