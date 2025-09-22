import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="d-flex justify-content-between align-items-center">
      <h1>Sexy Movies</h1>
      <Link className="home" to="http://localhost:5173/"><i class="fa-solid fa-house-chimney"></i></Link>
    </header>
  );
};

export default Header;
