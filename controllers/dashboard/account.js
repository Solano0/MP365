const USER_API = 'business/dashboard/usuario.php';

const HEADER = document.querySelector('header');
const FOOTER = document.querySelector('footer');

// Método manejador de eventos para cuando el documento ha cargado.
document.addEventListener('DOMContentLoaded', async () => {
    // Petición para obtener en nombre del usuario que ha iniciado sesión.
    const JSON = await dataFetch(USER_API, 'getUser');
    // Se verifica si el usuario está autenticado, de lo contrario se envía a iniciar sesión.
    if (JSON.session) {
        // Se comprueba si existe un alias definido para el usuario, de lo contrario se muestra un mensaje con la excepción.
        if (JSON.status) {
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
                  <img src="../../resources/img/logo.png" height="60" alt="Logo" loading="lazy" />
                </a>
                <!-- Left links -->
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link" href="dashboard.html">Inicio</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="administrar_categorias.html">Categorias</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="administrar_productos.html">Productos</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="administrar_sub-categorias.html">Sub_categorias</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href=""></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="valoraciones.html">Valoraciones</a>
                  </li>
                </ul>
                <!-- Left links -->
              </div>
              <!-- Collapsible wrapper -->
        
              <!-- Right elements -->
              <div class="d-flex align-items-center">
                <!-- Icon -->
                <a class="text-reset me-3" href="#">
                  <i class="fas fa-shopping-cart"></i>
                </a>
                <!-- Notifications -->
                <div class="dropdown">
                  <a class="text-reset me-3 dropdown-toggle hidden-arrow" href="#" id="navbarDropdownMenuLink" role="button"
                    data-mdb-toggle="dropdown" aria-expanded="false">
                    <i class="fas fa-bell"></i>
                    <span class="badge rounded-pill badge-notification bg-danger">1</span>
                  </a>
                </div>
                <!-- Small button groups (default and split) -->
                <div class="btn-group">
                <button class="btn btn-primary btn-sm dropdown-toggle" type="button" style="background-color: #5e8b7e;" data-mdb-toggle="dropdown" aria-expanded="false">
                    Session: <b>${JSON.username}</b>
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="usuarios.html">Administrar usuarios</a></li>
                    <li><a class="dropdown-item" href="clientes.html">Administrar Cliente</a></li>
                    <li><a class="dropdown-item" onclick="logOut()">Salir</a></li>
                </ul>
                </div>
              </div>
              <!-- Right elements -->
            </div>
            `;
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
                            <h6 class="text-uppercase fw-bold mb-4">
                                <i class="fas fa-gem me-3"></i>Compañia
                            </h6>
                            <p>
                            <div class="imagen-footer">
                              <img
                              src="../../resources/img/logo.png"
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
                                <a href="#!" class="text-reset">Acerca de Nosotros</a>
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
                            <h6 class="text-uppercase fw-bold mb-4">Contactos</h6>
                            <p><i class="fas fa-home me-3"></i> ElSalvador, SanSalvador</p>
                            <p>
                                <i class="fas fa-envelope me-3"></i>
                                almasp@gmail.com
                            </p>
                            <p><i class="fas fa-phone me-3"></i> 6969-6969</p>
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
        } else {
            sweetAlert(3, JSON.exception, false, 'index.html');
        }
    } else {
        // Se comprueba si la página web es la principal, de lo contrario se direcciona a iniciar sesión.
        if (location.pathname == '/AlmasPeludas/view/dashboard/index.html') {
            HEADER.innerHTML = `
                
            `;
            FOOTER.innerHTML = `
               
            `;
        } else {
            location.href = 'index.html';
        }
    }
});