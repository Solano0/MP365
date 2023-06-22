// Constante para completar la ruta de la API.
const CATEGORIA_API = 'business/public/categoria.php';
// Constante para establecer el contenedor de categorías.
const CATEGORIAS = document.getElementById('categorias');
// Se inicializa el componente Slider para que funcione el carrusel de imágenes.

// Método manejador de eventos para cuando el documento ha cargado.
document.addEventListener('DOMContentLoaded', async () => {
    // Petición para obtener las categorías disponibles.
    const JSON = await dataFetch(CATEGORIA_API, 'readAll');
    // Se comprueba si la respuesta es satisfactoria, de lo contrario se muestra un mensaje con la excepción.
    if (JSON.status) {
        // Se inicializa el contenedor de categorías.
        CATEGORIAS.innerHTML = '';
        // Se recorre el conjunto de registros fila por fila a través del objeto row.
        JSON.dataset.forEach(row => {
            // Se establece la página web de destino con los parámetros.
            url = `sub_categoria.html?id=${row.id_categoria}&nombre=${row.nombre_categoria}`;
            // Se crean y concatenan las tarjetas con los datos de cada categoría y
            // sub categoria hasta llegar al detalle
            CATEGORIAS.innerHTML += `
                    <div class="col">
                        <div class="card h-100">
                            <img src="${SERVER_URL}images/categorias/${row.imagen_categoria}" class="materialboxed"/>
                            <div class="card-body">
                                <h5 class="card-title"><b>${row.nombre_categoria}</b></h5>
                                <a href="${url}" class="btn">ver subCategoria</a>
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