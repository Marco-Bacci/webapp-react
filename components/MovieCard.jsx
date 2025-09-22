import { Link } from "react-router-dom";
const MovieCard = ({ movie }) => {
  const { id, image, title, director } = movie;
  return (
    <Link to={`/movies/${id}`}>
      <div className="movie-card">
        <img src={`/imgs/${image}`} alt="movie" />
        <div className="overlay text-center p-3 d-flex justify-content-center align-items-center">
          <div className="overlay-info">
            <h2>{title}</h2>
            <p>{director}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
