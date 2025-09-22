import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="container">
      <div className="text-center my-5">
        <h2 className="c-violet fw-bold">Pagina non trovata</h2>
        <p>Aya! La pagina cercata non esiste</p>
        <Link className="home c-violet" to="/"><i className="fa-solid fa-house-chimney"></i></Link>
      </div>
    </div>
  );
};

export default NotFound;
