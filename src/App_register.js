import './App.css';
import { Link} from "react-router-dom";

// function Despachos(){
//   return(
//     <div id="despachos">Banner</div> 
//   )  
// }

function App_register() {
  return (
    <>
   
{/* <!-- Responsive navbar--> */}
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container px-5">
            <Link to="/" className="navbar-brand">Transportadora De Carga Antioquia</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item"><Link to="/" className="nav-link active" aria-current="page">Home</Link></li>
                        <li className="nav-item"><a className="nav-link" href="#!">Quienes Somos</a></li>
                        <li className="nav-item"><a className="nav-link" href="#!">Contacto</a></li>
                        <li className="nav-item"><a className="nav-link" href="#!">Servicios</a></li>
                    </ul>
                </div>
            </div>
</nav>
        
<div className="container">

<div className="card o-hidden border-0 shadow-lg my-5">
    <div className="card-body p-0">
        {/* <!-- Nested Row within Card Body --> */}
        <div className="row">
            <div className="col-lg-5 d-none d-lg-block">
            <img className="img-fluid rounded mb-4 mb-lg-0" src="https://cdn-icons-png.flaticon.com/512/2422/2422612.png" alt="..." />

            </div>
            <div className="col-lg-7">
                <div className="p-5">
                    <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">Crear una cuenta!</h1>
                    </div>
                    <form className="user">
                        <div className="form-group row">
                            <div className="col-sm-6 mb-3 mb-sm-0">
                                <input type="text" className="form-control form-control-user" id="exampleFirstName"
                                    placeholder="First Name"/>
                            </div>
                            <div className="col-sm-6">
                                <input type="text" className="form-control form-control-user" id="exampleLastName"
                                    placeholder="Last Name"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control form-control-user" id="exampleInputEmail"
                                placeholder="Email Address"/>
                        </div>
                        <div className="form-group row">
                            <div className="col-sm-6 mb-3 mb-sm-0">
                                <input type="password" className="form-control form-control-user"
                                    id="exampleInputPassword" placeholder="Password"/>
                            </div>
                            <div className="col-sm-6">
                                <input type="password" className="form-control form-control-user"
                                    id="exampleRepeatPassword" placeholder="Repeat Password"/>
                            </div>
                        </div>
                        <a href="login.html" className="btn btn-primary btn-user btn-block">
                            Registrarme
                        </a>
                        <hr/>
                        <a href="index.html" className="btn btn-google btn-user btn-block">
                            <i className="fab fa-google fa-fw"></i> Registrarme con Google
                        </a>
                        <a href="index.html" className="btn btn-facebook btn-user btn-block">
                            <i className="fab fa-facebook-f fa-fw"></i> Registrarme con Facebook
                        </a>
                    </form>
                    <hr/>
                    <div className="text-center">
                    <Link to="/olvideContrasena" className="small">Olvidaste tu contraseña?</Link>
                    </div>
                    <div className="text-center">
                    <Link to="/login" className="small">Ya tienes una cuenta? Login!</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

</div>


{/* <!-- Bootstrap core JavaScript--> */}
<script src="vendor/jquery/jquery.min.js"></script>
<script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

{/* <!-- Core plugin JavaScript--> */}
<script src="vendor/jquery-easing/jquery.easing.min.js"></script>

{/* <!-- Custom scripts for all pages--> */}
<script src="js/sb-admin-2.min.js"></script>

 {/* <!-- Footer--> */}
 <footer className="py-5 bg-dark">
            <div className="container px-4 px-lg-5"><p className="m-0 text-center text-white">Copyright &copy; Transportadora De Carga Antioquia 2021</p></div>
        </footer>
        {/* <!-- Bootstrap core JS--> */}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
        {/* <!-- Core theme JS--> */}
        <script src="js/scripts.js"></script>

</>
  );
}

export default App_register;
