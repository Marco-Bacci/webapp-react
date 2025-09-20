import axios from "axios";
import { useState, useEffect } from "react";
const Homepage = () => {
  const [movies, setMovies] = useState([]);

  const fetchMovies = () => {
    axios
      .get("http://localhost:3000/movies")
      .then((resp) => {
        setMovies(resp.data);
        console.log(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(fetchMovies, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h2 className="text-center my-3">Homepage</h2>
        </div>
        <div className="row gy-4 my-4">
          {movies.map((movie) => {
            return (
              <div className="col-12 col-md-6 col-lg-4" key={movie.id}>
                <div className="movie-card">
                  <img src={`./imgs/${movie.image}`} alt="movie" />
                  <div className="overlay">
                    <h2>{movie.title}</h2>
                    <p>{movie.director}</p>
                    <p>
                      genre:{movie.genre} year:{movie.release_year}
                    </p>
                    <p>{movie.abstract}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
