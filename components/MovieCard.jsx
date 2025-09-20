const MovieCard = ({movie}) => {
  const {image, title, director, release_year, abstract} = movie
  return (
    <div className="movie-card">
      <img src={`./imgs/${image}`} alt="movie" />
      <div className="overlay text-center p-3">
        <h2>{title}</h2>
        <p>{director}</p>
        <p>
          genre: {movie.genre} year: {release_year}
        </p>
        <p>{abstract}</p>
      </div>
    </div>
  );
};

export default MovieCard;
