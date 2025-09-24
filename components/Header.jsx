import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="d-flex justify-content-between align-items-center">
      <Link to="/" className="home text-light" >
        <div className="logo d-flex">
          <img src="/imgs/film-reel-fill.svg" alt="" />
          <h1>Sexy Movies</h1>
        </div>
      </Link>
      <Link className="home text-light" to="/">
        <i className="fa-solid fa-house-chimney"></i>
      </Link>
    </header>
  );
};

export default Header;
