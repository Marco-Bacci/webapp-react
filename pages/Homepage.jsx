import axios from "axios";
import { useState, useEffect } from "react";
const Homepage = () => {
  const [movies, setMovies] = useState([]);

  const fetchMovies = () => {
    axios
      .get("http://localhost:3000/movies")
      .then((resp) => {
        setMovies(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(fetchMovies, []);

  return (
    <div className="container">
      <div className="row gy-4">
        <div className="col-12">
          <h2 className="text-center my-3">Homepage</h2>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <div className="movie-card">
            <img src="./imgs/inception.jpg" alt="" />
            <div className="overlay"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
