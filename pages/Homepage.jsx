import axios from "axios";
import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import { useContext } from "react";
import GlobalContext from "../src/contexts/GlobalContext";

const Homepage = () => {
  const [movies, setMovies] = useState([]);
  const {setIsLoading} = useContext(GlobalContext)

  const fetchMovies = () => {
    setIsLoading(true)
    axios
      .get("http://localhost:3000/movies")
      .then((resp) => {
        setMovies(resp.data);
        setIsLoading(false)
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
          <h2 className="text-center my-3 c-violet fw-bold">Homepage</h2>
        </div>
        <div className="row gy-4 my-4">
          {movies.map((movie) => {
            return (
              <div className="col-12 col-md-6 col-lg-4" key={movie.id}>
                <MovieCard movie={movie} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
