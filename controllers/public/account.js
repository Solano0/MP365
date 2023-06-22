/*
*   Controlador es de uso general en las páginas web del sitio público.
*   Sirve para manejar las plantillas del encabezado y pie del documento.
*/

// Constante para completar la ruta de la API.
const USER_API = 'business/public/cliente.php';
// Constantes para establecer las etiquetas de encabezado y pie de la página web.
const HEADER = document.querySelector('header');
const FOOTER = document.querySelector('footer');

// Método manejador de eventos para cuando el documento ha cargado.
document.addEventListener('DOMContentLoaded', async () => {
    // Petición para obtener en nombre del usuario que ha iniciado sesión.
    const JSON = await dataFetch(USER_API, 'getUser');
    // Se comprueba si el usuario está autenticado para establecer el encabezado respectivo.
    // Se insertan los 2 header en el sitio publico, el cual cuando no este iniciado sesion, mostrara
    // para iniciar y no mostrara el carrito y no dejara agregar productos al carrito
    if (JSON.session) {
        HEADER.innerHTML = `
        <nav class="navbar navbar-expand-lg ">
        <!-- Container wrapper -->
        <div class="container-fluid">
          <!-- Toggle button -->
          <button class="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <i class="fas fa-bars"></i>
          </button>
    
          <!-- Collapsible wrapper -->
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <!-- Navbar brand -->
            <a class="navbar-brand mt-2 mt-lg-0" href="#">
              <img src="./../../resources/img/logo.png" height="60" alt="Logo" loading="lazy" />
            </a>
            <!-- Left links -->
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" href="index.html">Inicio</a>
              </li>
              <li class="nav-item dropdown">
                <!-- Dropdown menu -->
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item" href="perros.html">Perro</a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="gatos.html">Gato</a>
                  </li>
                  <li>
                    <hr class="dropdown-divider"/>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#"></a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="detalle.html">Detalle</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="productos.html">Productos</a>
              </li>
            </ul>
            <!-- Left links -->
          </div>
          <!-- Collapsible wrapper -->
    
          <!-- Right elements -->
          <div class="d-flex align-items-center">
            <!-- Icon -->
            <a class="text-reset me-3" href="carrito.html">
              <i class="fas fa-shopping-cart"></i>
              <a href="carrito.html"></a>
            </a>
    
            <!-- Notifications -->
            <div class="dropdown">
              <a class="text-reset me-3 dropdown-toggle hidden-arrow" href="#" id="navbarDropdownMenuLink" role="button"
                data-mdb-toggle="dropdown" aria-expanded="false">
                <i class="fas fa-bell"></i>
                <span class="badge rounded-pill badge-notification bg-danger">1</span>
              </a>
            </div>
            <!-- Avatar -->
            <div class="dropdown">
            <button class="btn btn-primary btn-sm dropdown-toggle" type="button" style="background-color: #5e8b7e;" data-mdb-toggle="dropdown" aria-expanded="false">
            Session: <b>${JSON.username}</b>
            </button>
              <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuAvatar">
                <li>
                  <a class="dropdown-item" href="">Catalogo</a>
                </li>
                <li onclick="logOut()">
                  <a class="dropdown-item">Cerrar sesion</a>
                </li>
                <li >
                  <a class="dropdown-item" href="#"></a>
                </li>
              </ul>
            </div>
          </div>
          <!-- Right elements -->
        </div>
        <!-- Container wrapper -->
      </nav>
        `;
        // Este es el header cuando no esta iniciado sesion
    } else {
        HEADER.innerHTML = `
        <nav class="navbar navbar-expand-lg ">
        <!-- Container wrapper -->
        <div class="container-fluid">
          <!-- Toggle button -->
          <button class="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <i class="fas fa-bars"></i>
          </button>
    
          <!-- Collapsible wrapper -->
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <!-- Navbar brand -->
            <a class="navbar-brand mt-2 mt-lg-0" href="#">
              <img src="./../../resources/img/logo.png" height="60" alt="Logo" loading="lazy" />
            </a>
            <!-- Left links -->
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" href="index.html">Inicio</a>
              </li>
              <li class="nav-item dropdown">
                <!-- Dropdown menu -->
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item" href="./public/perros.html">Perro</a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="./public/gatos.html">Gato</a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#"></a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="./public/blog.html"></a>
              </li>
            </ul>
            <!-- Left links -->
          </div>
          <!-- Collapsible wrapper -->
    
          <!-- Right elements -->
          <div class="d-flex align-items-center">
            <!-- Icon -->
            <a class="text-reset me-3" href="">
              <a href="."></a>
            </a>
    
            <!-- Notifications -->
            <div class="dropdown">
              <a class="text-reset me-3 dropdown-toggle hidden-arrow" href="#" id="navbarDropdownMenuLink" role="button"
                data-mdb-toggle="dropdown" aria-expanded="false">
              </a>
            </div>
            <!-- Avatar -->
            <div class="dropdown">
            <button class="btn btn-primary btn-sm dropdown-toggle" type="button" style="background-color: #5e8b7e;" data-mdb-toggle="dropdown" aria-expanded="false">
            Session:
            </button>
              <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuAvatar">
                <li>
                  <a class="dropdown-item" href="login.html">Iniciar Sesion</a>
                </li>
                <li>
                  <a class="dropdown-item" href="Crear_Cuenta.html">Registrarce</a>
                </li>
                <li>
                  <a class="dropdown-item" href="#"></a>
                </li>
              </ul>
            </div>
          </div>
          <!-- Right elements -->
        </div>
        <!-- Container wrapper -->
      </nav>
        `;
    }
    // Se establece el pie del encabezado, se mostrara en todos los sitios.
    FOOTER.innerHTML = `
    <!-- Section: Social media -->
    <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom" >
        <!-- Left -->
        <div class="me-5 d-none d-lg-block">
            <span></span>
        </div>
        <!-- Left -->
        <!-- Right -->
        <div>
            <a href="" class="me-4 text-reset">
                <i class="fab fa-facebook-f"></i>
            </a>
            <a href="" class="me-4 text-reset">
                <i class="fab fa-twitter"></i>
            </a>
            <a href="" class="me-4 text-reset">
                <i class="fab fa-google"></i>
            </a>
            <a href="" class="me-4 text-reset">
                <i class="fab fa-instagram"></i>
            </a>
            <a href="" class="me-4 text-reset">
                <i class="fab fa-linkedin"></i>
            </a>
            <a href="" class="me-4 text-reset">
                <i class="fab fa-github"></i>
            </a>
        </div>
        <!-- Right -->
    </section>
    <!-- Section: Social media -->
  
    <!-- Section: Links  -->
    <section class="">
        <div class="container text-center text-md-start mt-5">
            <!-- Grid row -->
            <div class="row mt-3">
                <!-- Grid column -->
                <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                    <!-- Content -->
                    <h5 class="text-uppercase fw-bold mb-4">
                        <i class="fas fa-gem me-3"></i>Compañia
                    </h5>
                    <p>
                    <div class="imagen-footer">
                      <img
                      src="./../../resources/img/logo.png"
                      >
                    </div>
  
                    </p>
                </div>
                <!-- Grid column -->
  
                <!-- Grid column -->
                <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                    <!-- Links -->
                    <h6 class="text-uppercase fw-bold mb-4">
  
                    </h6>
                    <p>
                        <a href="./public/Acerca_Nosotros.html" class="text-reset">Acerca de Nosotros</a>
                    </p>
                    <p>
                        <a href="#!" class="text-reset">Terminos y Condiciones</a>
                    </p>
                    <p>
                        <a href="#!" class="text-reset">Polotica de Privacidad</a>
                    </p>
                    <p>
                        <a href="#!" class="text-reset"></a>
                    </p>
                </div>
                <!-- Grid column -->
  
                <!-- Grid column -->
                <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                    <!-- Links -->
                    <h6 class="text-uppercase fw-bold mb-4">
  
                    </h6>
                    <p>
                        <a href="#!" class="text-reset"></a>
                    </p>
                    <p>
                        <a href="#!" class="text-reset"></a>
                    </p>
                    <p>
                        <a href="#!" class="text-reset"></a>
                    </p>
                    <p>
                        <a href="#!" class="text-reset"></a>
                    </p>
                </div>
                <!-- Grid column -->
  
                <!-- Grid column -->
                <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                    <!-- Links -->
                    <h5 class="text-uppercase fw-bold mb-4">Contactos</h5>
                    <p><i class="fas fa-home me-3"></i> ElSalvador, SanSalvador</p>
                    <p>
                        <i class="fas fa-envelope me-3"></i>
                        almasp@gmail.com
                    </p>
                    <p><i class="fas fa-phone me-3"></i> 74856213</p>
                    <p><i class="fas fa-print me-3"></i> </p>
                </div>
                <!-- Grid column -->
            </div>
            <!-- Grid row -->
        </div>
    </section>
    <!-- Section: Links  -->
  
    <!-- Copyright -->
    <div class="text-center p-4" style="background-color: #0000000d;">
        © 2023 Copyright:
        <a class="text-reset fw-bold" href="#">AlmasPeludas</a>
    </div>
    <!-- Copyright -->
    `;
});