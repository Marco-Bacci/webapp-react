import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="d-flex justify-content-between align-items-center">
      <h1>Movieteca</h1>
      <Link className="home" to="http://localhost:5173/">home</Link>
    </header>
  );
};

export default Header;
