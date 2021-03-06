import './App.css';
import { Link} from "react-router-dom";

// function Despachos(){
//   return(
//     <div id="despachos">Banner</div> 
//   )  
// }

function App_olvide_pas() {
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

{/* <!-- Outer Row --> */}
<div className="row justify-content-center">

    <div className="col-xl-10 col-lg-12 col-md-9">

        <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card-body p-0">
                {/* <!-- Nested Row within Card Body --> */}
                <div className="row">
                    <div className="col-lg-6 d-none d-lg-block">
                    <img className="img-fluid rounded mb-4 mb-lg-0" src="https://image.freepik.com/foto-gratis/trabajador-oficina-mala-memoria-tratando-recordar-informacion-importante_273609-12343.jpg" alt="..." />
                    </div>
                    <div className="col-lg-6">
                        <div className="p-5">
                            <div className="text-center">
                                <h1 className="h4 text-gray-900 mb-2">Olvidaste tu contrase??a?</h1>
                                <p className="mb-4">We get it, stuff happens. Just enter your email address below
                                    and we'll send you a link to reset your password!</p>
                            </div>
                            <form className="user">
                                <div className="form-group">
                                    <input type="email" className="form-control form-control-user"
                                        id="exampleInputEmail" aria-describedby="emailHelp"
                                        placeholder="Enter Email Address..."/>
                                </div>
                                <a href="login.html" className="btn btn-primary btn-user btn-block">
                                    Recuperar Contrase??a
                                </a>
                            </form>
                            <hr/>
                            <div className="text-center">
                                <Link to="/register" cclassName="small" aria-current="page">Crear una cuenta!</Link>
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

export default App_olvide_pas;
