<?php
require_once('../../helpers/validator.php');
require_once('../../entities/dao/productos_queries.php');
/*
*	Clase para manejar la transferencia de datos de la entidad CATEGORIA.
*/
class producto extends productoQueries
{
    // Declaración de atributos (propiedades).
    protected $id_producto = null;
    protected $nombre_producto = null;
    protected $detalle_producto  = null;
    protected $precio_producto  = null;
    protected $imagen_producto = null;
    protected $estado_producto = null;
    protected $usuario = null;
    protected $subCategoria = null;
    protected $ruta = '../../images/productos/';

    /*
    *   Métodos para validar y asignar valores de los atributos.
    */
    public function setId($value)
    {
        if (Validator::validateNaturalNumber($value)) {
            $this->id_producto = $value;
            return true;
        } else {
            return false;
        }
    }

    public function setNombre($value)
    {
        if (Validator::validateAlphanumeric($value, 1, 50)) {
            $this->nombre_producto = $value;
            return true;
        } else {
            return false;
        }
    }

    public function setDetalle($value)
    {
        if ($value) {
            if (Validator::validateString($value, 1, 100)) {
                $this->detalle_producto = $value;
                return true;
            } else {
                return false;
            }
        } else {
            $this->detalle_producto = null;
            return true;
        }
    }

    public function setPrecio($value)
    {
        if (Validator::validateNaturalNumber($value)) {
            $this->precio_producto = $value;
            return true;
        } else {
            return false;
        }
    }

    public function setImagen($file)
    {
        if (Validator::validateImageFile($file, 500, 500)) {
            $this->imagen_producto = Validator::getFileName();
            return true;
        } else {
            return false;
        }
    }

    public function setEstado($value)
    {
        if (Validator::validateBoolean($value)) {
            $this->estado_producto = $value;
            return true;
        } else {
            return false;
        }
    }

    public function setUsuario($value)
    {
        if (Validator::validateNaturalNumber($value)) {
            $this->usuario = $value;
            return true;
        } else {
            return false;
        }
    }

    public function setSubcategoria($value)
    {
        if (Validator::validateNaturalNumber($value)) {
            $this->subCategoria = $value;
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
        return $this->id_producto;
    }

    public function getNombre()
    {
        return $this->nombre_producto;
    }

    public function getDetalle()
    {
        return $this->detalle_producto;
    }

    public function getPrecio()
    {
        return $this->precio_producto;
    }

    public function getImagen()
    {
        return $this->imagen_producto;
    }

    public function getEstado()
    {
        return $this->estado_producto;
    }

    public function getUsuario()
    {
        return $this->usuario;
    }

    public function getSubcategoria()
    {
        return $this->subCategoria;
    }

    public function getRuta()
    {
        return $this->ruta;
    }
}
