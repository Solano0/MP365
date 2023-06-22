// Constante para completar la ruta de la API.
const PRODUCTO_API = 'business/public/productos.php';
// Constante para establecer el contenedor de categorías.
const PARAMS = new URLSearchParams(location.search);
const PRODUCTO = document.getElementById('productos');
// Se inicializa el componente Slider para que funcione el carrusel de imágenes.

// Método manejador de eventos para cuando el documento ha cargado.
document.addEventListener('DOMContentLoaded', async () => {
    // Se define un objeto con los datos de la categoría seleccionada.
    const FORM = new FormData();
    FORM.append('id_sub_categoria', PARAMS.get('id'));
    // Petición para obtener las categorías disponibles.
    const JSON = await dataFetch(PRODUCTO_API, 'readProductossubCategoria', FORM);
    // Se comprueba si la respuesta es satisfactoria, de lo contrario se muestra un mensaje con la excepción.
    if (JSON.status) {
        // Se inicializa el contenedor de categorías.
        PRODUCTO.innerHTML = '';
        // Se recorre el conjunto de registros fila por fila a través del objeto row.
        JSON.dataset.forEach(row => {
            // Se establece la página web de destino con los parámetros.
            url = `detalle.html?id=${row.id_producto}&nombre=${row.nombre_producto}`;
            // Se crean y concatenan las tarjetas con los datos de cada categoría y
            // sub categoria hasta llegar al detalle
            PRODUCTO.innerHTML += `
                    <div class="col">
                        <div class="card h-100">
                            <img src="${SERVER_URL}images/categorias/${row.imagen_producto}"/>
                            <div class="card-body">
                                <h5 class="card-title"><b>${row.nombre_producto}</b></h5>
                                <a href="${url}" class="btn">ver detalle</a>
                            </div>
                        </div>
                    </div>
            `;
        });
        // Se inicializa el componente Tooltip para que funcionen las sugerencias textuales.
    } else {
        // Se asigna al título del contenido de la excepción cuando no existen datos para mostrar.
        document.getElementById('title').textContent = JSON.exception;
    }
});